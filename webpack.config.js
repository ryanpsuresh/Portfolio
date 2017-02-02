const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'client/public');
const APP_DIR = path.resolve(__dirname, 'client/app');

 module.exports = {
     entry: [ 
      'webpack-hot-middleware/client',
      'react-hot-loader/patch',
      `${APP_DIR}/index.jsx`,
     ],
     output: {
         path: BUILD_DIR,
         filename: 'bundle.js'
     },
     module: {
         loaders: [
          {
            test : /\.jsx?/,
            include : APP_DIR,
            loader : 'babel-loader'
          },
          {
            test: /\.html$/,
            include: APP_DIR,
            loader: 'html-loader?attrs[]=video:src'
          }, 
          {
            test: /\.(mp4|png)$/,
            loader: 'url-loader?limit=10000&mimetype=video/mp4'
          },
         ],
     },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
 };