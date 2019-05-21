import React from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import Header from './components/Header';

const App = ({ route }: RouteConfigComponentProps): JSX.Element => (
   <div>
      <Header />
      {renderRoutes(route && route.routes)}
   </div>
);

export default { component: App };
