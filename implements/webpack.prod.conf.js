const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

// Plugins
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const assetsPath = path.resolve(__dirname, '../static/dist');
const host = (process.env.HOST || 'localhost');
const port = (+process.env.PORT + 1) || 3001;

module.exports = {
    devtool: 'inline-source-map',
    context: path.resolve(__dirname, '../'),
    entry: {
        'main': [
            './src/index.js'
        ]
    },
    output: {
        path: assetsPath,
        filename: '[name].js?v=[hash]',
        chunkFilename: '[name].js?v=[chunkhash]',
        publicPath: 'http://' + host + ':' + port + '/dist/'
    },
    module: {
        loaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel']
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css?modules&importLoaders=2!sass'),
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css?modules&importLoaders=2!postcss'),
            },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
        ]
    },
    progress: true,
    resolve: {
        modulesDirectories: [
            'src',
            'node_modules'
        ],
        extensions: ['', '.json', '.js', '.jsx']
    },
    postcss: function() {
        return [
            require('postcss-nested')
        ];
    },
    plugins:[
        new ExtractTextPlugin('styles/[name].css?v=[hash]'),
    ],
}
