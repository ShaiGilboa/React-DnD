import produce from 'immer';
import { actionMan, gameState } from './types';
import { canMoveKnight } from '../../utils';

const initialState : gameState = {
  status: "idle",
  knightLocation: [2,7],
  moves: 0,
  pastPositions: [],
}
//appStatus: 'idle', 'loading'


const appReducer = (state: gameState = initialState, action: actionMan) => {
  switch (action.type) {
    case 'SET_STATUS_LOADING':

      return produce(state, draftState => {
        draftState.status = 'loading';
      });
    case 'SET_STATUS_IDLE':
      
      return produce(state, draftState => {
        draftState.status = 'idle';
      });
      case 'CHANGE_KNIGHT_LOCATION':
        console.log('action', action.data)
        return produce(state, draftState => {
          if (canMoveKnight(action.data, state.knightLocation)) {
          draftState.knightLocation = action.data;
        } else {
          
        }
        });
    default:
      return state;
  }
}

export default appReducer;