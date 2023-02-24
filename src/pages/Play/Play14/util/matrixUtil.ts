export class MatrixUtil {

  public static array = (rows: number, columns: number) => {
    const a = [];
    for (let i = 0; i < rows; i++) {
      const t: number[] = [];
      a[i] = t;
      for (let j = 0; j < columns; j++) {
        a[i].push(0);
      }
    }
    return a;
  }

  public static isEmpty(a: number[][]) {
    if (!a || a.length < 1 || a[0].length < 1) {
      return true;
    }
    return false;
  }

  public static sum(a: number[][]) {
    if (this.isEmpty(a)) {
      return 0
    }
    let sum: number = 0;
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a[0].length; j++) {
        sum += a[i][j];
      }
    }
    return sum;
  }

  public static operable(a: number[][]) {
    if (this.isEmpty(a) || (a.length !== a[0].length) || (a.length !== 3 && a.length !== 4)) {
      return false;
    }
    return true;
  }

  public static rotate = (a: number[][]) => {
    if (!this.operable(a)) {
      throw new Error();
    }
    const b: number[][] = this.array(a.length, a[0].length)
    if (a.length === 3) {
      b[0][0] = a[2][0];
      b[0][1] = a[1][0];
      b[0][2] = a[0][0];
      b[1][0] = a[2][1];
      b[1][1] = a[1][1];
      b[1][2] = a[0][1];
      b[2][0] = a[2][2];
      b[2][1] = a[1][2];
      b[2][2] = a[0][2];
    }
    if (a.length === 4) {
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
  public static reverse = (a: number[][]) => {
    if (!this.operable(a)) {
      throw new Error();
    }
    const b: number[][] = this.array(a.length, a[0].length)
    if (a.length === 3) {
      b[0][0] = a[0][2];
      b[0][1] = a[0][1];
      b[0][2] = a[0][0];
      b[1][0] = a[1][2];
      b[1][1] = a[1][1];
      b[1][2] = a[1][0];
      b[2][0] = a[2][2];
      b[2][1] = a[2][1];
      b[2][2] = a[2][0];
    }
    if (a.length === 4) {
      b[0][0] = a[0][3];
      b[0][1] = a[0][2];
      b[0][2] = a[0][1];
      b[0][3] = a[0][0];
      b[1][0] = a[1][3];
      b[1][1] = a[1][2];
      b[1][2] = a[1][1];
      b[1][3] = a[1][0];
      b[2][0] = a[2][3];
      b[2][1] = a[2][2];
      b[2][2] = a[2][1];
      b[2][3] = a[2][0];
      b[3][0] = a[3][3];
      b[3][1] = a[3][2];
      b[3][2] = a[3][1];
      b[3][3] = a[3][0];
    }
    return b;
  }

  public static copy(a: number[][]) {
    if (!this.operable(a)) {
      throw new Error();
    }
    const b: number[][] = this.array(a.length, a[0].length);
    if (b.length >= 3) {
      b[0][0] = a[0][0];
      b[0][1] = a[0][1];
      b[0][2] = a[0][2];
      b[1][0] = a[1][0];
      b[1][1] = a[1][1];
      b[1][2] = a[1][2];
      b[2][0] = a[2][0];
      b[2][1] = a[2][1];
      b[2][2] = a[2][2];
    }
    if (b.length >= 4) {
      b[0][3] = a[0][3];
      b[1][3] = a[1][3];
      b[2][3] = a[2][3];
      b[3][0] = a[3][0];
      b[3][1] = a[3][1];
      b[3][2] = a[3][2];
      b[3][3] = a[3][3];
    }
    return b;
  }

  public static left0(a: number[][]) {
    if (!this.operable(a)) {
      throw new Error();
    }
    const b: number[][] = this.array(a.length, a[0].length);
    if (b.length >= 3) {
      b[0][0] = a[0][1];
      b[0][1] = a[0][2];
      b[1][0] = a[1][1];
      b[1][1] = a[1][2];
      b[2][0] = a[2][1];
      b[2][1] = a[2][2];
    }
    if (b.length >= 4) {
      b[0][2] = a[0][3];
      b[1][2] = a[1][3];
      b[2][2] = a[2][3];
      b[3][0] = a[3][1];
      b[3][1] = a[3][2];
      b[3][2] = a[3][3];
    }
    return b;
  }

  public static left(a: number[][]) {
    if (!this.operable(a)) {
      throw new Error();
    }
    const sum = this.sum(a);
    let r = this.copy(a);
    while (true) {
      const b = this.left0(r);
      if (sum !== this.sum(b)) {
        return r;
      }
      r = b;
    }
  }

  public static top0(a: number[][]) {
    if (!this.operable(a)) {
      throw new Error();
    }
    const b: number[][] = this.array(a.length, a[0].length);
    if (b.length >= 3) {
      b[0][0] = a[1][0];
      b[0][1] = a[1][1];
      b[0][2] = a[1][2];
      b[1][0] = a[2][0];
      b[1][1] = a[2][1];
      b[1][2] = a[2][2];
    }
    if (b.length >= 4) {
      b[0][3] = a[1][3];
      b[1][3] = a[2][3];
      b[2][0] = a[3][0];
      b[2][1] = a[3][1];
      b[2][2] = a[3][2];
      b[2][3] = a[3][3];
    }
    return b;
  }

  public static top(a: number[][]) {
    if (!this.operable(a)) {
      throw new Error();
    }
    const sum = this.sum(a);
    let r = this.copy(a);
    while (true) {
      const b = this.top0(r);
      if (sum !== this.sum(b)) {
        return r;
      }
      r = b;
    }
  }

  public static move2TopLeft(a: number[][]) {
    return this.top(this.left(a));
  }
}
