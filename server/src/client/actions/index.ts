import { ActionCreator, Dispatch, AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import {
   ActionTypes,
   FetchUsersAction,
   FetchCurrentUserAction,
   User,
   FetchAdminsAction,
} from './types';

export const fetchUsers: ActionCreator<
ThunkAction<any, User[], AxiosInstance, FetchUsersAction>
> = () => async (dispatch: Dispatch, getState, api) => {
   const res = await api.get('/users');

   dispatch({
      type: ActionTypes.FETCH_USERS,
      payload: res.data,
   });
};

export const fetchCurrentUser: ActionCreator<
ThunkAction<any, Promise<any>, AxiosInstance, any>
> = () => async (dispatch, getState, api) => {
   const res = await api.get('/current_user');

   dispatch({
      type: ActionTypes.FETCH_CURRENT_USER,
      payload: res,
   });
};

export const fetchAdmins: ActionCreator<
ThunkAction<any, Promise<AnyAction>, AxiosInstance, any>
> = () => async (dispatch, getState, api) => {
   const res = await api.get('/admins');

   return dispatch({
      type: ActionTypes.FETCH_ADMINS,
      payload: res,
   });
};
