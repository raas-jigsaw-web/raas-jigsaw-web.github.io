/**
 * Target board + solution overlay — aligned with CalendarJigsawService.java (static helpers).
 */
import { longToArray } from './matrixUtil';

/** Month cells (0–11). */
const M: number[][] = [
  [0, 0],
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 5],
  [1, 0],
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
];

/** Day-of-month cells (0–30). */
const D: number[][] = [
  [2, 0],
  [2, 1],
  [2, 2],
  [2, 3],
  [2, 4],
  [2, 5],
  [2, 6],
  [3, 0],
  [3, 1],
  [3, 2],
  [3, 3],
  [3, 4],
  [3, 5],
  [3, 6],
  [4, 0],
  [4, 1],
  [4, 2],
  [4, 3],
  [4, 4],
  [4, 5],
  [4, 6],
  [5, 0],
  [5, 1],
  [5, 2],
  [5, 3],
  [5, 4],
  [5, 5],
  [5, 6],
  [6, 0],
  [6, 1],
  [6, 2],
];

/** Weekday cells; Sunday = 0 … Saturday = 6 (matches Play date picker). */
const W: number[][] = [
  [6, 3],
  [6, 4],
  [6, 5],
  [6, 6],
  [7, 4],
  [7, 5],
  [7, 6],
];

function initialReservedCells(): number[][] {
  const a = Array.from({ length: 8 }, () => new Array(7).fill(0));
  a[0][6] = 1;
  a[1][6] = 1;
  a[7][0] = 1;
  a[7][1] = 1;
  a[7][2] = 1;
  a[7][3] = 1;
  return a;
}

export function buildTargetMatrix(monthIndex: number, dayIndex: number, weekSun0: number): number[][] {
  const board = initialReservedCells();
  board[M[monthIndex][0]][M[monthIndex][1]] = 1;
  board[D[dayIndex][0]][D[dayIndex][1]] = 1;
  board[W[weekSun0][0]][W[weekSun0][1]] = 1;
  return board;
}

export function overlaySolution(
  target: number[][],
  pa: bigint,
  pb: bigint,
  pc: bigint,
  pd: bigint,
  pe: bigint,
  pf: bigint,
  pg: bigint,
  ph: bigint,
  pi: bigint,
  pj: bigint,
): string[][] {
  const grid: string[][] = Array.from({ length: 8 }, () => Array(7).fill(' '));
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 7; c++) {
      if (target[r][c] !== 0) {
        grid[r][c] = '`';
      }
    }
  }
  applyPiece(grid, pa, 'A');
  applyPiece(grid, pb, 'B');
  applyPiece(grid, pc, 'C');
  applyPiece(grid, pd, 'D');
  applyPiece(grid, pe, 'E');
  applyPiece(grid, pf, 'F');
  applyPiece(grid, pg, 'G');
  applyPiece(grid, ph, 'H');
  applyPiece(grid, pi, 'I');
  applyPiece(grid, pj, 'J');
  return grid;
}

function applyPiece(grid: string[][], mask: bigint, name: string): void {
  const m = longToArray(mask);
  const ch = name;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 7; j++) {
      if (m[i][j] !== 0) {
        grid[i][j] = ch;
      }
    }
  }
}
