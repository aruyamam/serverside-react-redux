import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { ActionTypes, FetchUsersAction, User } from './types';

const fetchUsers: ActionCreator<
ThunkAction<any, User[], AxiosInstance, FetchUsersAction>
> = () => async (dispatch: Dispatch, getState, api) => {
   const res = await api.get('/users');

   return dispatch({
      type: ActionTypes.FETCH_USERS,
      payload: res.data,
   });
};

export default fetchUsers;
