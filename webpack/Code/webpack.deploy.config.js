var path              = require('path');
var webpack           = require('webpack');
var node_modules      = path.resolve(__dirname, 'node_modules');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var DEPLOY            = process.env.webpack_deploy;
var _rootName 		  = __dirname;
try{
	_rootName = __dirname
}catch(e){
	_rootName = path.resolve(path.dirname())
}
console.log( path.resolve(_rootName, 'app/main.js'))
var webpackConfig = {
	entry: {
		mobile:  path.resolve(_rootName, 'app/mobile.js'),
		vendors: ['react']
	},
	output: {
		path:       path.resolve(_rootName, 'dist'),
		filename:   '[name].js?v=[chunkhash]',
		publicPath: !DEPLOY ? 'dist' : 'http://www.imjiangtao.com'
	},
	plugins: [
    	new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
		new ExtractTextPlugin('styles.css'),
    	new HtmlWebpackPlugin(),
    	new HtmlWebpackPlugin({
			template: 'app/custom.html',
			filename: 'custom.html',
			chunks:   ['mobile'],
			inject:   'body'
		})
  	],
	module: {
		loaders: [{
			test:    /\.jsx?$/,
			exclude: [node_modules],
			loader:  'babel'
		}, {
			test:   /\.css$/,
			loader: ExtractTextPlugin.extract("style-loader", "css-loader")
		}, {
			test: /\.s(a|c)ss$/,
			loader: 'style!css!sass',
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
	}
};

module.exports = webpackConfig;
