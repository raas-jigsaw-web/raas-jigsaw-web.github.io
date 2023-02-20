export const AA = [
  [1, 1, 0, 0,],
  [0, 1, 0, 0,],
  [0, 1, 0, 0,],
  [0, 1, 0, 0,],
]

export const BB = [
  [1, 0, 0,],
  [1, 1, 0,],
  [1, 1, 0,],
]
export const CC = [
  [1, 1, 1,],
  [1, 0, 1,],
  [0, 0, 0,],
]
export const DD = [
  [1, 1, 1,],
  [1, 0, 0,],
  [1, 0, 0,],
]
export const EE = [
  [1, 1, 0,],
  [0, 1, 0,],
  [0, 1, 1,],
]
export const FF = [
  [1, 1, 1,],
  [0, 1, 0,],
  [0, 1, 0,],
]
export const GG = [
  [1, 0, 0, 0,],
  [1, 0, 0, 0,],
  [1, 0, 0, 0,],
  [1, 0, 0, 0,],
]
export const HH = [
  [1, 1, 0,],
  [0, 1, 0,],
  [0, 1, 0,],
]
export const II = [
  [1, 1, 0, 0,],
  [0, 1, 1, 1,],
  [0, 0, 0, 0,],
  [0, 0, 0, 0,],
]
export const JJ = [
  [1, 1, 0,],
  [0, 1, 1,],
  [0, 0, 0,],
]

export const Colors = {
  AA: "rgb(105,165,45)",
  BB: "rgb(145,85,160)",
  CC: "rgb(230,225,45)",
  DD: "rgb(20,130,240)",
  EE: "rgb(120,100,200)",
  FF: "rgb(105,165,45)",
  GG: "rgb(145,85,160)",
  HH: "rgb(230,225,45)",
  II: "rgb(20,130,240)",
  JJ: "rgb(120,100,200)",
}

export class Piece {
  matrix?: number[][]
  color?: string
  name?: string
}

export const Pieces: Piece[] = [
  {name: "AA", matrix: AA, color: Colors.AA},
  {name: "BB", matrix: BB, color: Colors.BB},
  {name: "CC", matrix: CC, color: Colors.CC},
  {name: "DD", matrix: DD, color: Colors.DD},
  {name: "EE", matrix: EE, color: Colors.EE},
  {name: "FF", matrix: FF, color: Colors.FF},
  {name: "GG", matrix: GG, color: Colors.GG},
  {name: "HH", matrix: HH, color: Colors.HH},
  {name: "II", matrix: II, color: Colors.II},
  {name: "JJ", matrix: JJ, color: Colors.JJ},
]
