import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/components/Home';

export default (): string => {
   const content = renderToString(React.createElement(Home));

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
