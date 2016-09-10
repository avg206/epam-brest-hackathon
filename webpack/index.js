const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: [
    'babel-polyfill', path.join(__dirname, '../src/app'),
  ],

  output: {
    path: path.join(__dirname, '../public'),
    filename: '[name].js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
      },
      {
        test: /\.svg$/,
        loader: 'svg-url',
      },
      {
        test: /\.(png|jpe?g|gif|woff2?|ttf|eot|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file?name=assets/[name].[ext]',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!postcss-loader!css-loader',
      },
    ],
  },

  postcss: [
    autoprefixer({
      browsers: ['last 3 versions', '> 1%'],
    }),
  ],

  plugins: [
    new CopyWebpackPlugin([{
      from: path.join(__dirname, '../src/assets'),
      to: 'assets',
    }]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../src/index.html'),
    }),
  ],
};
