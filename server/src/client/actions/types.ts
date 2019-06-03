import { StaticContext } from 'react-router';

export enum ActionTypes {
   FETCH_USERS = 'fetch_users',
   FETCH_CURRENT_USER = 'fetch_current_user',
}

export interface User {
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
   payload: Promise<any>;
}

export interface Context extends StaticContext {
   notFound?: boolean;
}
