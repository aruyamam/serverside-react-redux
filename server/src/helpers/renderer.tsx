import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Request } from 'express';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { renderRoutes, RouteConfig } from 'react-router-config';
import serialize from 'serialize-javascript';
import { Context } from '../client/actions/types';
import Routes from '../client/Routes';
import { AppState } from './createStore';

export default (req: Request, store: Store<AppState>, context: Context): string => {
   const content = renderToString(
      <Provider store={store}>
         <StaticRouter location={req.path} context={context}>
            <div>{renderRoutes(Routes as RouteConfig[])}</div>
         </StaticRouter>
      </Provider>,
   );

   return `
      <html>
         <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
         </head>
         <body>
            <div id="root">${content}</div>
            <script>
               window.INITIAL_STATE = ${serialize(store.getState())}
            </script>
            <script src="bundle.js"></script>
         </body>
      </html>
   `;
};
