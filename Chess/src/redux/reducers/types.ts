export interface gameState {
  status: "idle" | "loading" | "error",
  knightLocation: number[],
  moves: number,
  pastPositions: Array<number[]>,
}

export interface actionMan {
  type: string,
  data: any,
}