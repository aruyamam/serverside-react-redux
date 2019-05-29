import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import { AppState } from '../../helpers/createStore';

export default combineReducers<AppState>({
   users: usersReducer,
   auth: authReducer,
});
