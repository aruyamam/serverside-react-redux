module.exports = {
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
