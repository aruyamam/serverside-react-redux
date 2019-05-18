import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(
   '/api',
   proxy('http://react-ssr-api.herokuapp.com', {
      proxyReqOptDecorator(opts) {
         opts.header['x-forwarded-host'] = 'localhost:3000';

         return opts;
      },
   }),
);
app.use(express.static('public'));

app.get(
   '*',
   (req, res): void => {
      const store = createStore();

      const promises = matchRoutes(Routes, req.path).map(({ route }) => (route.loadData ? route.loadData(store) : null));

      Promise.all(promises).then(() => {
         res.send(renderer(req, store));
      });
   },
);

app.listen(
   3000,
   (): void => {
      console.log('Listening on port 3000');
   },
);
