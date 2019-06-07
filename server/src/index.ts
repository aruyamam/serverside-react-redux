import express from 'express';
import { matchRoutes, RouteConfig } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import { Context } from './client/actions/types';

const app = express();

app.use(
   '/api',
   proxy('http://react-ssr-api.herokuapp.com', {
      proxyReqOptDecorator(opts) {
         if (opts.headers) {
            opts.headers['x-forwarded-host'] = 'localhost:3000';
         }

         return opts;
      },
   }),
);
app.use(express.static('public'));

app.get(
   '*',
   (req, res): void => {
      const store = createStore(req);

      const promises = matchRoutes(Routes as RouteConfig[], req.path).map(({ route }) => {
         return route.loadData ? route.loadData(store) : null;
      }).map((promise) => {
         if (promise) {
            return new Promise((resolve, reject) => {
               promise.then(resolve).catch(resolve);
            });
         }
      });

      Promise.all(promises).then(() => {
         const context: Context = {};
         const content = renderer(req, store, context);

         if (context.notFound) {
            res.status(404);
         }

         res.send(content);
      });
   },
);

app.listen(
   3000,
   (): void => {
      console.log('Listening on port 3000');
   },
);
