var path              = require('path');
var webpack           = require('webpack');
var node_modules      = path.resolve(__dirname, 'node_modules');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var config = {
	entry: {
		app: path.resolve(__dirname, 'app/main.js'),
		mobile: path.resolve(__dirname, 'app/mobile.js'),
		vendors: ['react']
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: [node_modules],
			loader: 'babel'
		}, {
			test: /\.css$/,
			loader:  ExtractTextPlugin.extract("style-loader", "css-loader")
		}, {
			test: /\.s(a|c)ss$/,
			loader: 'style!css!sass',
			loader:  ExtractTextPlugin.extract("style-loader", "css-loader")

		}, {
			test: /\.less$/,
			loader: 'style!css!less',
		}, {
			test: /\.(png|jpe?g)$/,
			loader: 'url?limit=30000',
		}, {
			test: /\.woff$/,
			loader: 'url?limit=10240'
		}]
	},
	plugins: [
    	new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
		new ExtractTextPlugin('styles.css'),
    	new HtmlWebpackPlugin()
  	]
};

module.exports = config;
