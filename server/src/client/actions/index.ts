import axios from 'axios';
import { ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ActionTypes, FetchUsersAction, User } from './types';

const fetchUsers: ActionCreator<ThunkAction<any, User[], null, FetchUsersAction>> = () => async (
   dispatch: Dispatch,
) => {
   const res = await axios.get('https://react-ssr-api.herokuapp.com/users');

   return dispatch({
      type: ActionTypes.FETCH_USERS,
      payload: res.data,
   });
};

export default fetchUsers;
