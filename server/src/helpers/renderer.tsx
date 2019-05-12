import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Request } from 'express';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import Routes from '../client/Routes';
import { AppState } from './createStore';

export default (req: Request, store: Store<AppState>): string => {
   const content = renderToString(
      <Provider store={store}>
         <StaticRouter location={req.path} context={{}}>
            <Routes />
         </StaticRouter>
      </Provider>,
   );

   return `
      <html>
         <head></head>
         <body>
            <div id="root">${content}</div>
            <script src="bundle.js"></script>
         </body>
      </html>
   `;
};
