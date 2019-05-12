import { Reducer } from 'redux';
import { ActionTypes, FetchUsersAction, User } from '../actions/types';

const usersReducer: Reducer<User[], FetchUsersAction> = (state = [], action): User[] => {
   switch (action.type) {
      case ActionTypes.FETCH_USERS:
         return action.payload;

      default:
         return state;
   }
};

export default usersReducer;
