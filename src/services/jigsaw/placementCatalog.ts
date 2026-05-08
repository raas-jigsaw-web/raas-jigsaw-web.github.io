/**
 * Piece shapes (AA–JJ) and placement enumeration — aligned with jigsaw-api JigsawPlacementCatalog.java.
 */
import {
  expand,
  getPossibleDirections,
  getPossiblePlacements,
} from './matrixUtil';

/** Canonical matrices (must match Java ELEMENTS). */
const AA = [
  [1, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 0],
];

const BB = [
  [1, 0, 0],
  [1, 1, 0],
  [1, 1, 0],
];

const CC = [
  [1, 1, 1],
  [1, 0, 1],
  [0, 0, 0],
];

const DD = [
  [1, 1, 1],
  [1, 0, 0],
  [1, 0, 0],
];

const EE = [
  [1, 1, 0],
  [0, 1, 0],
  [0, 1, 1],
];

const FF = [
  [1, 1, 1],
  [0, 1, 0],
  [0, 1, 0],
];

const GG = [
  [1, 0, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 0],
];

const HH = [
  [1, 1, 0],
  [0, 1, 0],
  [0, 1, 0],
];

const II = [
  [1, 1, 0, 0],
  [0, 1, 1, 1],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const JJ = [
  [1, 1, 0],
  [0, 1, 1],
  [0, 0, 0],
];

export const ELEMENTS: Record<string, number[][]> = {
  AA,
  BB,
  CC,
  DD,
  EE,
  FF,
  GG,
  HH,
  II,
  JJ,
};

/** Matches Java iteration order. */
export const PIECE_IDS = ['AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'HH', 'II', 'JJ'] as const;

export type PieceId = (typeof PIECE_IDS)[number];

export function buildPlacementMap(target: number[][]): Map<string, bigint[]> {
  const placementMap = new Map<string, bigint[]>();
  for (const key of PIECE_IDS) {
    const element = ELEMENTS[key];
    const set = new Set<bigint>();
    for (const direction of getPossibleDirections(element)) {
      const expanded = expand(direction, target.length, target[0].length);
      for (const pl of getPossiblePlacements(expanded, target)) {
        set.add(pl);
      }
    }
    const arr = [...set].sort((x, y) => (x < y ? -1 : x > y ? 1 : 0));
    placementMap.set(key, arr);
  }
  return placementMap;
}
