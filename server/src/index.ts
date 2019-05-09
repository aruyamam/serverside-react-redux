import express from 'express';
import renderer from './helpers/renderer';

const app = express();

app.use(express.static('public'));

app.get(
   '*',
   (req, res): void => {
      res.send(renderer(req));
   },
);

app.listen(
   3000,
   (): void => {
      console.log('Listening on port 3000');
   },
);
