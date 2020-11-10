
export const canMoveKnight = ([toX, toY] : number[] , knightLocation : number[]) => {
  const [x, y] = knightLocation
  // console.log('x,y', x,y)
  const dx : number = toX - x
  const dy : number = toY - y
  // console.log('dx, dy', dx, dy)
  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  )
}