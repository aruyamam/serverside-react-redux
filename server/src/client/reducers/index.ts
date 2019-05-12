import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import { AppState } from '../../helpers/createStore';

export default combineReducers<AppState>({
   users: usersReducer,
});
