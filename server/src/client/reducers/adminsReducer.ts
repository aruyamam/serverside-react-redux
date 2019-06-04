import { ActionTypes } from '../actions/types';

const adminsReducer = (state = [], action: any) => {
   switch (action.type) {
      case ActionTypes.FETCH_ADMINS:
         return action.payload.data;

      default:
         return state;
   }
};

export default adminsReducer;
