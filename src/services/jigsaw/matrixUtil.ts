/**
 * Matrix helpers ported from jigsaw-api MatrixUtil.java (bitmask placement on 8×7 board).
 * Board masks use bigint for 56-bit precision (safe vs JS Number).
 */

export function isEmpty(a: number[][] | null | undefined): boolean {
  return !a || a.length <= 0 || !a[0] || a[0].length <= 0;
}

export function sum(a: number[][]): number {
  if (isEmpty(a)) return 0;
  let s = 0;
  for (const row of a) {
    for (const v of row) {
      s += v;
    }
  }
  return s;
}

export function product(a: number[][], b: number[][]): number {
  if (isEmpty(a) || isEmpty(b)) return 0;
  let p = 0;
  for (let i = 0; i < Math.min(a.length, b.length); i++) {
    for (let j = 0; j < Math.min(a[0].length, b[0].length); j++) {
      p += a[i][j] * b[i][j];
    }
  }
  return p;
}

/** Matches Java MatrixUtil.move (System.arraycopy semantics). */
export function move(a: number[][], down: number, right: number): number[][] {
  if (isEmpty(a)) throw new Error('empty matrix');
  const b = Array.from({ length: a.length }, () => new Array(a[0].length).fill(0));
  for (let i = 0; i < b.length - down; i++) {
    try {
      const destRow = i + down;
      const destCol = Math.max(right, 0);
      const len = Math.min(b[0].length - right, b[0].length);
      for (let k = 0; k < len; k++) {
        if (k < a[i].length && destCol + k < b[destRow].length) {
          b[destRow][destCol + k] = a[i][k];
        }
      }
    } catch {
      /* match legacy */
    }
  }
  return b;
}

export function left(a: number[][]): number[][] {
  if (isEmpty(a)) throw new Error('empty matrix');
  const b = Array.from({ length: a.length }, () => new Array(a[0].length).fill(0));
  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < b[0].length - 1; j++) {
      b[i][j] = a[i][j + 1];
    }
  }
  return b;
}

export function up(a: number[][]): number[][] {
  if (isEmpty(a)) throw new Error('empty matrix');
  const b = Array.from({ length: a.length }, () => new Array(a[0].length).fill(0));
  for (let i = 1; i < b.length; i++) {
    for (let j = 0; j < b[0].length; j++) {
      b[i - 1][j] = a[i][j];
    }
  }
  return b;
}

export function rotate(a: number[][]): number[][] {
  if (isEmpty(a)) throw new Error('empty matrix');
  if (a.length !== a[0].length || (a.length !== 3 && a.length !== 4)) {
    throw new Error('rotate supports 3×3 or 4×4 only');
  }
  const n = a.length;
  const b = Array.from({ length: n }, () => new Array(n).fill(0));
  if (n === 3) {
    b[0][0] = a[2][0];
    b[0][1] = a[1][0];
    b[0][2] = a[0][0];
    b[1][0] = a[2][1];
    b[1][1] = a[1][1];
    b[1][2] = a[0][1];
    b[2][0] = a[2][2];
    b[2][1] = a[1][2];
    b[2][2] = a[0][2];
  } else {
    b[0][0] = a[3][0];
    b[0][1] = a[2][0];
    b[0][2] = a[1][0];
    b[0][3] = a[0][0];
    b[1][0] = a[3][1];
    b[1][1] = a[2][1];
    b[1][2] = a[1][1];
    b[1][3] = a[0][1];
    b[2][0] = a[3][2];
    b[2][1] = a[2][2];
    b[2][2] = a[1][2];
    b[2][3] = a[0][2];
    b[3][0] = a[3][3];
    b[3][1] = a[2][3];
    b[3][2] = a[1][3];
    b[3][3] = a[0][3];
  }
  return b;
}

export function mirror(a: number[][]): number[][] {
  if (isEmpty(a)) throw new Error('empty matrix');
  if (a.length !== a[0].length || (a.length !== 3 && a.length !== 4)) {
    throw new Error('mirror supports 3×3 or 4×4 only');
  }
  const n = a.length;
  const b = Array.from({ length: n }, () => new Array(n).fill(0));
  if (n === 3) {
    for (let j = 0; j < 3; j++) {
      b[2][j] = a[0][j];
      b[1][j] = a[1][j];
      b[0][j] = a[2][j];
    }
  } else {
    for (let j = 0; j < 4; j++) {
      b[3][j] = a[0][j];
      b[2][j] = a[1][j];
      b[1][j] = a[2][j];
      b[0][j] = a[3][j];
    }
  }
  return b;
}

export function move2TopLeft(a: number[][]): number[][] {
  if (isEmpty(a)) throw new Error('empty matrix');
  let b = cloneMatrix(a);
  const s0 = sum(a);
  while (true) {
    const t = left(b);
    if (sum(t) === s0) {
      b = t;
    } else {
      break;
    }
  }
  while (true) {
    const t = up(b);
    if (sum(t) === s0) {
      b = t;
    } else {
      break;
    }
  }
  return b;
}

function cloneMatrix(a: number[][]): number[][] {
  return a.map((row) => row.slice());
}

/** Matches Java MatrixUtil.expand (pads piece matrix to board size). */
export function expand(a: number[][], row: number, column: number): number[][] {
  if (isEmpty(a)) throw new Error('empty matrix');
  const b = Array.from({ length: row }, () => new Array(column).fill(0));
  for (let i = 0; i < Math.min(a.length, b.length); i++) {
    for (let k = 0; k < Math.min(a[0].length, b[0].length); k++) {
      b[i][k] = a[i][k];
    }
  }
  return b;
}

export function getPossibleDirections(a: number[][]): Set<number[][]> {
  const r = new Set<number[][]>();
  const a0 = move2TopLeft(a);
  const a1 = move2TopLeft(rotate(a0));
  const a2 = move2TopLeft(rotate(a1));
  const a3 = move2TopLeft(rotate(a2));
  const a4 = move2TopLeft(mirror(a));
  const a5 = move2TopLeft(rotate(a4));
  const a6 = move2TopLeft(rotate(a5));
  const a7 = move2TopLeft(rotate(a6));
  [a0, a1, a2, a3, a4, a5, a6, a7].forEach((m) => r.add(m));
  return r;
}

export function getPossiblePlacements(matrix: number[][], target: number[][]): bigint[] {
  if (isEmpty(matrix) || isEmpty(target)) throw new Error('empty matrix');
  const row = target.length;
  const column = target[0].length;
  const placements: bigint[] = [];
  const s = sum(matrix);
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      const moved = move(matrix, i, j);
      if (sum(moved) === s && product(moved, target) === 0) {
        placements.push(arrayToLong(moved));
      }
    }
  }
  return placements;
}

export function arrayToLong(a: number[][]): bigint {
  if (isEmpty(a)) return 0n;
  let sb = '';
  for (const aa of a) {
    for (const aaa of aa) {
      sb += aaa;
    }
  }
  return BigInt(`0b${sb}`);
}

/** Decode 56-bit row-major board into 8×7. */
export function longToArray(a: bigint): number[][] {
  const r: number[][] = [];
  for (let i = 0; i < 8; i++) {
    r[i] = [];
    for (let j = 0; j < 7; j++) {
      const bp = 55 - 7 * i - j;
      const mask = 1n << BigInt(bp);
      r[i][j] = (a & mask) !== 0n ? 1 : 0;
    }
  }
  return r;
}

export function bitCount(x: bigint): number {
  let n = 0;
  let v = x;
  while (v > 0n) {
    if ((v & 1n) !== 0n) n++;
    v >>= 1n;
  }
  return n;
}
