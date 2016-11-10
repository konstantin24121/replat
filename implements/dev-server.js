/* eslint-disable */
const webpack = require('webpack');
const path = require('path');
const express = require('express');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('./webpack.common');

const server = express();
const compiler = webpack(webpackConfig);

const host = (process.env.HOST || 'localhost');
const port = (+process.env.PORT) || 3000;

server.use(devMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  historyApiFallback: true,
  stats: {
    colors: true,
    timings: true,
    chunks: false,
  }
}));

server.use(hotMiddleware(compiler));

server.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../static/index.html'));
});

server.listen(port, host, function (err) {
  if (err) {
    return console.error(err);
  }

  console.info('==> 💻  Open http://%s:%s in a browser to view the app.', host, port);
});
