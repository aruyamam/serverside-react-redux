// Startup point for the client side application
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes, RouteConfig } from 'react-router-config';
import axios from 'axios';
import { AppState } from '../helpers/createStore';
import Routes from './Routes';
import reducers from './reducers';

const axiosInstance = axios.create({
   baseURL: '/api',
});

declare global {
   interface Window {
      INITIAL_STATE: AppState;
   }
}

const store = createStore(
   reducers,
   window.INITIAL_STATE,
   applyMiddleware(thunk.withExtraArgument(axiosInstance)),
);

ReactDOM.hydrate(
   <Provider store={store}>
      <BrowserRouter>
         <div>{renderRoutes(Routes as RouteConfig[])}</div>
      </BrowserRouter>
   </Provider>,
   document.querySelector('#root'),
);
