import React from 'react';

const Home = (): React.ReactElement => (
   <div>
      <div>I&apos;m the VERY VERY BEST home component</div>
      <button type="button" onClick={() => console.log('Hi there!')}>
         Press me!
      </button>
   </div>
);

export default Home;
