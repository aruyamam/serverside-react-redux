import { StaticRouterContext } from 'react-router';
import { AxiosResponse } from 'axios';

export enum ActionTypes {
   FETCH_USERS = 'fetch_users',
   FETCH_CURRENT_USER = 'fetch_current_user',
   FETCH_ADMINS = 'fetch_admins',
}

export interface User {
   id: number;
   name: string;
}

export interface Admin {
   id: number;
   name: string;
}

export interface AuthState {
   _id: string;
   __v: number;
   googleId: string;
}

export interface FetchUsersAction {
   type: ActionTypes.FETCH_USERS;
   payload: User[];
}

export interface FetchCurrentUserAction {
   type: ActionTypes.FETCH_CURRENT_USER;
   payload: AxiosResponse<User[]>;
}

export interface FetchAdminsAction {
   type: ActionTypes.FETCH_ADMINS;
   payload: AxiosResponse<Admin[]>;
}

export interface Context extends StaticRouterContext {
   notFound?: boolean;
}
