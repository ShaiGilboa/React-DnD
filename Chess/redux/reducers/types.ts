export interface gameState {
  status: "idle" | "loading" | "error",
  knightLocation: number[],
}

export interface actionMan {
  type: string,
  
}