import { AnyAction, Reducer } from 'redux';
import { ActionTypes, AuthState, FetchCurrentUserAction } from '../actions/types';

const authReducer: Reducer<AuthState | null, AnyAction> = (state = null, action) => {
   switch (action.type) {
      case ActionTypes.FETCH_CURRENT_USER:
         return action.payload.data || false;

      default:
         return state;
   }
};

export default authReducer;
