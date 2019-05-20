import React from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';

const App = ({ route }: RouteConfigComponentProps): JSX.Element => (
   <div>
      <h1>Im a header</h1>
      {renderRoutes(route.routes)}
   </div>
);

export default { component: App };
