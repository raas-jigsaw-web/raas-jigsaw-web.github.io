export const A = [
  [1, 1, 0, 0,],
  [0, 1, 0, 0,],
  [0, 1, 0, 0,],
  [0, 1, 0, 0,],
]

export const B = [
  [1, 0, 0,],
  [1, 1, 0,],
  [1, 1, 0,],
]
export const C = [
  [1, 1, 1,],
  [1, 0, 1,],
  [0, 0, 0,],
]
export const D = [
  [0, 0, 1,],
  [0, 0, 1,],
  [1, 1, 1,],
]
export const E = [
  [1, 1, 0,],
  [0, 1, 0,],
  [0, 1, 1,],
]
export const F = [
  [1, 1, 1,],
  [0, 1, 0,],
  [0, 1, 0,],
]
export const G = [
  [1, 1, 1, 1,],
  [0, 0, 0, 0,],
  [0, 0, 0, 0,],
  [0, 0, 0, 0,],
]
export const H = [
  [0, 1, 0,],
  [0, 1, 0,],
  [1, 1, 0,],
]
export const I = [
  [1, 1, 0, 0,],
  [0, 1, 1, 1,],
  [0, 0, 0, 0,],
  [0, 0, 0, 0,],
]
export const J = [
  [1, 1, 0,],
  [0, 1, 1,],
  [0, 0, 0,],
]

export const Colors = {
  A: "rgb(105,165,45)",
  B: "rgb(145,85,160)",
  C: "rgb(120,85,85)",
  D: "rgb(40,130,240)",
  E: "rgb(120,100,200)",
  F: "rgb(250,190,110)",
  G: "rgb(220,110,160)",
  H: "rgb(230,110,15)",
  I: "rgb(80,180,140)",
  J: "rgb(220,150,100)",
}

export class Piece {
  matrix?: number[][]
  color?: string
  name?: string
}

export const Pieces: Piece[] = [
  {name: "A", matrix: A, color: Colors.A},
  {name: "B", matrix: B, color: Colors.B},
  {name: "C", matrix: C, color: Colors.C},
  {name: "D", matrix: D, color: Colors.D},
  {name: "E", matrix: E, color: Colors.E},
  {name: "F", matrix: F, color: Colors.F},
  {name: "G", matrix: G, color: Colors.G},
  {name: "H", matrix: H, color: Colors.H},
  {name: "I", matrix: I, color: Colors.I},
  {name: "J", matrix: J, color: Colors.J},
]

// backboard
export class Backboard {
  static Rows = 8;
  static Columns = 7;
  static BoxSize = 90;
  static backgroundColor = ["white", "#eee"];
  static backgroundColorHighLight = "#f1c205";
  static border = "1px solid rgb(25,140,250)";
  static Id = "backboard-id";
  static LoadMore = 20;
  static Url = "https://jigsaw.raas-dev.autodesk.com";
}

export const Texts: string[][] = [
  ["january", "february", "march", "april", "may", "june", "",],
  ["july", "august", "september", "october", "november", "december", "",],
  ["01", "02", "03", "04", "05", "06", "07",],
  ["08", "09", "10", "11", "12", "13", "14",],
  ["15", "16", "17", "18", "19", "20", "21",],
  ["22", "23", "24", "25", "26", "27", "28",],
  ["29", "30", "31", "sunday", "monday", "tuesday", "wednesday",],
  ["", "", "", "", "thursday", "friday", "saturday",],
];

export const Weeks = [
  [6, 3], [6, 4], [6, 5], [6, 6], [7, 4], [7, 5], [7, 6],
]
export const Days = [
  [2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6],
  [3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6],
  [4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6],
  [5, 0], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6],
  [6, 0], [6, 1], [6, 2],
]
export const Months = [
  [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5],
  [1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5],
]
export const Empties = [
  [0, 6], [1, 6], [7, 0], [7, 1], [7, 2], [7, 3],
]
