var path         = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact  = path.resolve(node_modules, 'react/dist/react.min.js');


module.exports = {
		entry: ['webpack/hot/dev-server',path.resolve(__dirname, 'app/main.js')],
		resolve: {
			alias: {
				'react': pathToReact,
			}
		},
		output: {
				path: path.resolve(__dirname, 'build'),
				filename: 'bundle.js',
		},
		module: {
			loaders: [{
				test: /\.jsx?$/,
				loader: 'babel'
			}, {
				test: /\.css$/,
				loader: 'style!css'
			}, {
				test: /\.s(a|c)ss$/,
				loader: 'style!css!sass',
			}, {
				test: /\.less$/,
				loader: 'style!css!less',
			}, {
				test: /\.(png|jpg)$/,
				loader: 'url?limit=25000',
			}, {
				test: /\.woff$/,
				loader: 'url?limit=100000'
			}],
			noParse: [pathToReact]
		}
};
