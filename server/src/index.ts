import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();

app.get(
   '/',
   (req, res): void => {
      const content = renderToString(React.createElement(Home));

      res.send(content);
   },
);

app.listen(
   3000,
   (): void => {
      console.log('Listening on port 3000');
   },
);
