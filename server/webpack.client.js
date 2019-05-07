const path = require('path');

module.exports = {
   // Tell webpack the root file of our
   // serve appliication
   entry: './src/client/client.ts',

   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public'),
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
