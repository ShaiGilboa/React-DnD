export let knightPosition : number[] = [1, 7]
let observer : any = null

const emitChange = () => {
  observer(knightPosition)
}

export const observe = (o : any) => {
  if (observer) {
    throw new Error('Multiple observers not implemented.')
  }

  observer = o
  emitChange()
}

export const moveKnight = (toX : number, toY : number) => {
  knightPosition = [toX, toY]
  emitChange()
}

export const canMoveKnight = (toX : number, toY : number) => {
  const [x, y] = knightPosition
  console.log('x,y', x,y)
  const dx = toX - x
  const dy = toY - y

  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  )
}