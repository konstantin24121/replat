/* eslint-disable */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const webpackConfig = require('./webpack.common');

const host = (process.env.HOST || 'localhost');
const port = (+process.env.PORT) || 3000;

new WebpackDevServer(webpack(webpackConfig), {
  contentBase: './static',
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  progress: true,
  stats: {
  	colors: true,
  	timings: true,
  	chunks: false,
  },
}).listen(port, host, function (err, result) {
  if (err) { return console.log(err); }
  console.info('==> 💻  Open http://%s:%s in a browser to view the app.', host, port);
});
