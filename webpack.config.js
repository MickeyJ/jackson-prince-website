const webpack = require('webpack');

const DEV = process.env.NODE_ENV==='development';

const config ={
  entry: './src/react',
  output:{
    path: './public/js',
    filename: 'bundle.js'
  },
  devtool: DEV ? 'cheap-module-source-map' : 'source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-1']
        }
      }
    ]
  }
};

if(!DEV){
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      mangle: false,
      compressor: {
        drop_console: true,
        warnings: true
      }
    })
  );
}

module.exports = config;