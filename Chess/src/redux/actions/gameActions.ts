export const setGameStatusLoading = () => {
  return {
    type: 'SET_STATUS_LOADING',
  }
};
export const setGameStatusIdle = () => {
  return {
    type: 'SET_STATUS_IDLE',
  }
};

export const changeKnightLocation = (newPosition : number[]) => {
  console.log('newPosition', newPosition)
  return {
    type: 'CHANGE_KNIGHT_LOCATION',
    data: newPosition,
  }
}