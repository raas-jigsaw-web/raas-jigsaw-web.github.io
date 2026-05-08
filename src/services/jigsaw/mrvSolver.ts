/**
 * Client-side MRV + incremental feasible counts + LCV — ported from CalendarJigsawMrvService.java.
 */
import { bitCount } from './matrixUtil';
import { buildTargetMatrix, overlaySolution } from './calendarBoard';
import { buildPlacementMap, PIECE_IDS } from './placementCatalog';

const ALL_PIECES_MASK = (1 << PIECE_IDS.length) - 1;

export interface SolutionMatrix {
  matrix: string[][];
}

export interface LocalResolveResult {
  code: number;
  message: string;
  count: number;
  data: SolutionMatrix[];
}

function countDrop(pls: bigint[], len: number, occ: bigint, addMask: bigint): number {
  let d = 0;
  for (let i = 0; i < len; i++) {
    const pl = pls[i];
    if ((pl & occ) === 0n && (pl & addMask) !== 0n) {
      d++;
    }
  }
  return d;
}

function sumDropsForRemaining(
  placementsByIndex: bigint[][],
  placementLen: number[],
  pieceP: number,
  occupied: bigint,
  mask: bigint,
  childRemaining: number,
): bigint {
  let sum = 0;
  for (let q = 0; q < PIECE_IDS.length; q++) {
    if (q === pieceP) continue;
    if (((childRemaining >> q) & 1) === 0) continue;
    sum += countDrop(placementsByIndex[q], placementLen[q], occupied, mask);
  }
  return BigInt(sum);
}

function sortCandidatesByLcv(
  ks: number[],
  lcvScores: bigint[],
  placementsForP: bigint[],
  nv: number,
): void {
  for (let i = 1; i < nv; i++) {
    const kKey = ks[i];
    const scoreKey = lcvScores[i];
    const maskKey = placementsForP[kKey];
    const bcKey = bitCount(maskKey);

    let j = i - 1;
    while (j >= 0) {
      const kj = ks[j];
      const sj = lcvScores[j];
      const mj = placementsForP[kj];
      const bj = bitCount(mj);

      let moveRight = false;
      if (sj > scoreKey) {
        moveRight = true;
      } else if (sj === scoreKey) {
        if (bj > bcKey) {
          moveRight = true;
        } else if (bj === bcKey && kj > kKey) {
          moveRight = true;
        }
      }

      if (!moveRight) break;
      ks[j + 1] = ks[j];
      lcvScores[j + 1] = lcvScores[j];
      j--;
    }
    ks[j + 1] = kKey;
    lcvScores[j + 1] = scoreKey;
  }
}

function selectMrvPiece(remainingMask: number, feasibleCount: number[]): number | null {
  let best = -1;
  let bestFc = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < feasibleCount.length; i++) {
    if (((remainingMask >> i) & 1) === 0) continue;
    const fc = feasibleCount[i];
    if (fc === 0) return null;
    if (best < 0 || fc < bestFc || (fc === bestFc && i < best)) {
      bestFc = fc;
      best = i;
    }
  }
  return best >= 0 ? best : null;
}

interface Stats {
  overlapRejects: number;
  dedupeRejects: number;
  leafCandidates: number;
  solutionsEmitted: number;
}

function recordSolution(
  target: number[][],
  masksByIndex: bigint[],
  dedupe: Set<string>,
  stats: Stats,
  solutions: SolutionMatrix[],
): void {
  const sorted = [...masksByIndex].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
  const key = sorted.join(',');
  if (dedupe.has(key)) {
    stats.dedupeRejects++;
    return;
  }
  dedupe.add(key);
  stats.leafCandidates++;
  solutions.push({
    matrix: overlaySolution(
      target,
      masksByIndex[0],
      masksByIndex[1],
      masksByIndex[2],
      masksByIndex[3],
      masksByIndex[4],
      masksByIndex[5],
      masksByIndex[6],
      masksByIndex[7],
      masksByIndex[8],
      masksByIndex[9],
    ),
  });
  stats.solutionsEmitted++;
}

function dfs(
  target: number[][],
  placementsByIndex: bigint[][],
  placementLen: number[],
  feasibleCount: number[],
  candidateKsScratch: number[],
  lcvScoreScratch: bigint[],
  occupied: bigint,
  remainingMask: number,
  assignedMask: (bigint | undefined)[],
  solutions: SolutionMatrix[],
  dedupe: Set<string>,
  stats: Stats,
  maxSolutions: number,
): void {
  if (solutions.length >= maxSolutions) return;
  if (remainingMask === 0) {
    recordSolution(target, assignedMask as bigint[], dedupe, stats, solutions);
    return;
  }

  const pObj = selectMrvPiece(remainingMask, feasibleCount);
  if (pObj === null) return;
  const p = pObj;
  const childRemaining = remainingMask & ~(1 << p);
  const placementsP = placementsByIndex[p];

  let nv = 0;
  for (let k = 0; k < placementLen[p]; k++) {
    const mask = placementsP[k];
    if ((mask & occupied) !== 0n) {
      stats.overlapRejects++;
      continue;
    }
    candidateKsScratch[nv] = k;
    lcvScoreScratch[nv] = sumDropsForRemaining(
      placementsByIndex,
      placementLen,
      p,
      occupied,
      mask,
      childRemaining,
    );
    nv++;
  }

  sortCandidatesByLcv(candidateKsScratch, lcvScoreScratch, placementsP, nv);
  const trialOrder = candidateKsScratch.slice(0, nv);

  for (let i = 0; i < nv; i++) {
    const k = trialOrder[i];
    const mask = placementsP[k];

    for (let q = 0; q < feasibleCount.length; q++) {
      if (((childRemaining >> q) & 1) === 0) continue;
      feasibleCount[q] -= countDrop(placementsByIndex[q], placementLen[q], occupied, mask);
    }

    let zeroDomain = false;
    for (let q = 0; q < feasibleCount.length; q++) {
      if (((childRemaining >> q) & 1) === 0) continue;
      if (feasibleCount[q] === 0) {
        zeroDomain = true;
        break;
      }
    }

    if (!zeroDomain) {
      assignedMask[p] = mask;
      dfs(
        target,
        placementsByIndex,
        placementLen,
        feasibleCount,
        candidateKsScratch,
        lcvScoreScratch,
        occupied | mask,
        childRemaining,
        assignedMask,
        solutions,
        dedupe,
        stats,
        maxSolutions,
      );
      assignedMask[p] = undefined;
    }

    for (let q = 0; q < feasibleCount.length; q++) {
      if (((childRemaining >> q) & 1) === 0) continue;
      feasibleCount[q] += countDrop(placementsByIndex[q], placementLen[q], occupied, mask);
    }

    if (solutions.length >= maxSolutions) return;
  }
}

const DEFAULT_MAX = 50;
const HARD_CAP = 500;

export function clampMaxSolutions(count: number | undefined): number {
  if (count === undefined || count <= 0) return DEFAULT_MAX;
  return Math.min(count, HARD_CAP);
}

/** Same semantics as SolverInputsParser + computeMrv without deadline. */
export function solveMrvLocal(month0: number, day0: number, weekSun0: number, maxSolutions: number): LocalResolveResult {
  const max = clampMaxSolutions(maxSolutions);
  const target = buildTargetMatrix(month0, day0, weekSun0);
  const placementMap = buildPlacementMap(target);

  const placementsByIndex: bigint[][] = [];
  const placementLen: number[] = [];
  const feasibleCount: number[] = [];
  let maxPlacementRow = 0;

  for (let i = 0; i < PIECE_IDS.length; i++) {
    const arr = placementMap.get(PIECE_IDS[i])!;
    placementsByIndex.push(arr);
    placementLen.push(arr.length);
    feasibleCount.push(arr.length);
    maxPlacementRow = Math.max(maxPlacementRow, arr.length);
  }

  const candidateKsScratch = new Array<number>(maxPlacementRow).fill(0);
  const lcvScoreScratch = new Array<bigint>(maxPlacementRow).fill(0n);

  const solutions: SolutionMatrix[] = [];
  const dedupe = new Set<string>();
  const stats: Stats = {
    overlapRejects: 0,
    dedupeRejects: 0,
    leafCandidates: 0,
    solutionsEmitted: 0,
  };

  const assignedMask: (bigint | undefined)[] = Array.from({ length: PIECE_IDS.length }, () => undefined);

  dfs(
    target,
    placementsByIndex,
    placementLen,
    feasibleCount,
    candidateKsScratch,
    lcvScoreScratch,
    0n,
    ALL_PIECES_MASK,
    assignedMask,
    solutions,
    dedupe,
    stats,
    max,
  );

  return {
    code: 0,
    message: 'ok',
    count: solutions.length,
    data: solutions,
  };
}
