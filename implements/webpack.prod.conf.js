/* eslint-disable */

const webpack = require('webpack');

// Plugins
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		'app': [
			'./src/client.js'
		]
	},

	output: {
		path: 'public',
		publicPath: '/',
	},

	module: {
		loaders: [{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('css?modules&importLoaders=2!sass'),
			}, {
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('css?modules&importLoaders=2!postcss'),
			},
		]
	},
	plugins:[
		new ExtractTextPlugin('bundle.css?v=[hash]'),

		new HtmlWebpackPlugin({
      template: 'static/index.tpl.html',
      filename: 'index.html',
      chunks: ['app'],
      inject: 'body',
    }),

    new webpack.DefinePlugin({
      __DEVELOPMENT__: false,
      __ENV__: JSON.stringify(process.env.NODE_ENV),
      __DEVTOOLS__: false
    }),
	],
}
