/* eslint-disable */
const webpack = require('webpack');


const host = (process.env.HOST || 'localhost');
const port = (+process.env.PORT) || 3000;

// Plugins

module.exports = {
	devtool: 'inline-source-map',
	entry: {
	  'main': [
	  	`webpack-dev-server/client?http://${host}:${port}`,
	    'webpack/hot/only-dev-server',
		  './src/client.js'
	  ]
	},

	module: {
		loaders: [{
				test: /\.scss$/,
				loader: 'style!css?modules&importLoaders=2!postcss!sass'
			}, {
				test: /\.css$/,
				loader: 'style!css?modules&localIdentName=[path][name]--[local]&sourceMap!postcss'
			},
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
      __ENV__: JSON.stringify(process.env.NODE_ENV),
      __DEVTOOLS__: process.env.DEVTOOLS
    }),
	],
}
