import React from 'react';

const Home = (): JSX.Element => (
   <div>
      <div>I&apos;m the VERY VERY BEST home component</div>
      <button type="button" onClick={(): void => console.log('Hi there!')}>
         Press me!
      </button>
   </div>
);

export default {
   component: Home,
};
