import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
let node_modules = path.resolve(__dirname, 'node_modules');
let DEPLOY = process.env.webpack_deploy;
let entry = {
    mobile: [path.resolve(__dirname, 'app/js/mobile.js')]
};
let hotReload = true;
let chunks = Object.keys(entry);
let webpackConfig = {
    entry: entry,
    resolve: {
        modulesDirectories: ["node_modules", "bower_components"]
    },
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: '[name].js?v=[hash:5]',
        publicPath: !DEPLOY ? 'js' : 'http://www.imjiangtao.com'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            chunks: chunks,
            minChunks: chunks.length
        }),
        new ExtractTextPlugin('../css/styles.css'),
        new HtmlWebpackPlugin({
            template: 'app/custom.html',
            filename: '../custom.html',
            chunks: ['vendors', 'mobile'],
            inject: true,
            minify: {
                minifyJS: true,
                minifyCSS: true,
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        //new webpack.optimize.UglifyJsPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: [node_modules],
            query: {
                //presets: ['es2015', 'stage-0', 'react'],
                //plugins: ['transform-runtime']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader?minimize", "css-loader?minimize")
        }, {
            test: /\.s(a|c)ss$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css?minimize', 'sass-loader')
        }, {
            test: /\.(png|jpe?g)$/,
            loader: 'url-loader?limit=30000'
        }, {
            test: /\.woff$/,
            loader: 'url-loader?limit=10240'
        }],
        //noParse: [node_modules]
    }
};

export default webpackConfig;

