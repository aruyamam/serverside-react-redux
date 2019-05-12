import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/reducers';
import { User } from '../client/actions/types';

export interface AppState {
   users: User[];
}

export default (): Store => {
   const store = createStore(reducers, {}, applyMiddleware(thunk));

   return store;
};
