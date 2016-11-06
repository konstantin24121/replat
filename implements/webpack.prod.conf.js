/* eslint-disable */

// Plugins
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		'main': [
			'./src/client.js'
		]
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
		new ExtractTextPlugin('styles/[name].css?v=[hash]'),
	],
}
