export enum ActionTypes {
   FETCH_USERS = 'fetch_users',
}

export interface User {
   id: number;
   name: string;
}

export interface FetchUsersAction {
   type: ActionTypes.FETCH_USERS;
   payload: User[];
}
