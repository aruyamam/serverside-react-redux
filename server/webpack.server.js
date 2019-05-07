const path = require('path');

module.exports = {
   // Inform webpack that we're building a bundle
   // for nodeJS, rather than for the browser
   target: 'node',

   // Tell webpack the root file of our
   // serve appliication
   entry: './src/index.ts',

   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build'),
   },

   resolve: {
      extensions: ['.ts', '.tsx', '.js'],
   },

   // Tell webpack to run babel on every file it runs through
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            exclude: [/node_moudles/],
            use: ['babel-loader'],
         },
      ],
   },
};
