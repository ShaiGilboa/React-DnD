import produce from 'immer';
import { actionMan, gameState } from './types';
import { knightPosition } from '../../src/utils';

const initialState : gameState = {
  status: "idle",
  knightLocation: [2,7],
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

        return produce(state, draftState => {
          draftState.knightLocation = action.data.knightLocation;
        });
    default:
      return state;
  }
}

export default appReducer;