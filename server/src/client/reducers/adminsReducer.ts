import { Reducer } from 'redux';
import { ActionTypes, Admin, FetchAdminsAction } from '../actions/types';

const adminsReducer: Reducer<Admin[], FetchAdminsAction> = (state = [], action) => {
   switch (action.type) {
      case ActionTypes.FETCH_ADMINS:
         return action.payload.data;

      default:
         return state;
   }
};

export default adminsReducer;
