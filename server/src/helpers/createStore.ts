import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import { Request } from 'express';
import reducers from '../client/reducers';
import { User } from '../client/actions/types';

export interface AppState {
   users: User[];
}

export default (req: Request): Store => {
   const axiosInstance = axios.create({
      baseURL: 'http://react-ssr-api.herokuapp.com',
      headers: { cookie: req.get('cookie') || '' },
   });

   const store = createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)));

   return store;
};
