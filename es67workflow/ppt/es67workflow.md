title: 搭建ES6/7工作流搭建
speaker: 江涛
url: http://Jerret321.github.io/shares/publish/es67workflow.htm
transition: card
files: /css/zhufeng.css,/img

[slide]

# 搭建ES6/7工作流搭建
## 分享人：江涛 


[slide]

# 背景
> 2015年6月，`ES2015`正式发布。无论 NodeJS 还是 Browser， 使用`ES2015`/`ES6`开发 提高开发效率。


[slide]

# 转码器和打包工具

- [typescript](http://www.typescriptlang.org/)
- [babel](http://babeljs.io/)
- [webpack](https://github.com/webpack)
- [gulp](http://gulpjs.com/)

[slide]
# 以 babel5.8.3 + webpack 为例

[slide]
# babel5.8.3安装
```javascript
npm install -g babel@5.8.3
```

[slide]
# babel基本命令
* `babel -w`      // 提供watch方法
* `babel -o`      // 输出到一个文件
* `babel -d`      // 指定要编译的目录
* `babel -s`      // 生成sourcemap
* `babel --help`  // 更多命令


[slide]
# webpack的特性 ?

* 仅需要对应的加载器即可支持，配置简单，关注文件依赖关系即可 {:&.moveIn}
* 用于处理文件依赖分析和进行打包，让程序员可以专注组件开发 
* 兼容各种JS模块规范 - AMD、CommonJS、ES6
* 对各种资源都可支持打包 css、js/jsx、img、svg、fonts等
* 可打包成多个模块，实现公共模块、独立模块按需加载
* 支持内存打包和实时打包生成文件，性能更快

[slide style="background-image:url('/img/webpack.jpg'); background-size: contain;"]

[slide]

## 安装

*  可以同时安装global和local版本

    ```javascript
    npm install -g webpack
    ```

    ```javascript
    npm install --save-dev webpack
    ```

[slide]

## webpack 基本命令

* `webpack`         // 最基本的启动webpack方法
* `webpack -w`      // 提供watch方法，实时进行打包更新
* `webpack -p`      // 对打包后的文件进行压缩
* `webpack -d`      // 提供source map，方便调试。
* `webpack --confg` // 以某个config作为打包
* `webpack --help`  // 更多命令

[slide]

## webpack 使用和配置

* node.js API使用：
```javascript
var webpack = require('webpack');
```
* 默认使用当前目录的webpack.config.js作为配置文件。可以根据不同的需求配置不同的config

[slide]

## Demo

[slide]


## 最简单的Webpack配置文件webpack.config.js如下所示：

```javascript
module.exports = {
  entry:[
    './app/main.js'
  ],
  output: {
    path: __dirname + '/dist/',
    publicPath: "/dist/",
    filename: 'bundle.js'
  }
};

```
*  其中entry参数定义了打包后的入口文件，数组中的所有文件会打包生成一个filename文件
*  output参数定义了输出文件的位置


[slide]

## 模块加载器

*  模块：静态的文件，比如：JavaScript，CSS，sass，TypeScript，JSX，CoffeeScript，图片等等
*  文件配置： 通过正则表达式对文件名进行匹配
*  对于不同的模块有其对应的模块加载器，它们可以进行串联

```javascript
module: {
    loaders: [{
        test: /\.s(a|c)ss$/,
        loader:  'style-loader!css-loader!sass-loader'
        }, {
            test: /\.(png|jpe?g)$/,
            loader: 'url-loader?limit=10000&name=build/[name].[ext]'
        }]
    }
}
```

* require()还支持在资源path前面指定loader，即require(![loaders list]![source path])形式
```javascript
require(“style!css!sass!./mystyles.sass”);
```

[slide]

##  复杂的配置---公共文件提取

* 使用了一个 CommonsChunkPlugin 的插件，它用于提取多个入口文件的公共脚本部分，然后生成一个 common.js 来方便多页面之间进行复用

```javascript
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
  entry: { a: "./a", b: "./b" },
  output: { filename: "[name].js" },
  plugins: [ new CommonsChunkPlugin("common.js") ]
}
```

```html
<script src="common.js"></script>
<script src="a.js"></script>
<script src="b.js"></script>
```

[slide]

## 有用的配置项

* `module.noParse`如果你确定一个模块中没有其它新的依赖, 就可以配置这项，webpack 将不再扫描这个文件中的依赖。

    ```javascript
    module: {
        loaders：[{ test: /\.css$/, loader: 'style-loader'}],
        noParse: [/moment-with-locales/]
    }
    ```
* `resolve.alias` 是 Webpack 的一个配置项，它的作用是把用户的一个请求重定向到另一个路径

    ```javascript
    resolve: {
        extensions: ['.js', '.sass', '.css'],
        alias: {
            moment: "moment/min/moment-with-locales.min.js"
        }
    }
    ```


[slide]

##  不同规范的模块加载实现（AMD、CommonJS、ES6）

*  CommonJS的require函数则是同步加载---使用require.ensure实现兼容
*  AMD是模块异步加载并保证执行顺序---使用require实现兼容
*  ES6中使用import实现模块的引入---使用Babel实现兼容

>在Webpack中推荐CommonJS方式去加载模块，这种方式语法更加简洁直观。

[slide]

##  模块的引用

*  使用require方式直接引用静态文件
*  CSS 被转化为 style 标签

    ```javascript

    require('./myapp.sass');
    var myapp = require('./myapp.js');

    console.log(myapp);
    ```

[slide]

## 图片的打包

*  使用require方式直接引用静态文件
*  url-loader可以帮助我们实现图片的封装打包，也可以通过require实现。
*  图片可能被转化成 base64 格式的 dataUrl

```javascript
div.img{
    background: url(../image/xxx.jpg)
}

//或者
var img = document.createElement("img");
img.src = require("../image/xxx.jpg");
document.body.appendChild(img);
```

[slide]

## css文件独立打包

通常我们不想把样式打在脚本中，最好独立生成css文件，在页面中外链才好，这时可以使用插件extract-text-webpack-plugin
```javascript
 npm install extract-text-webpack-plugin –save-dev
```

```javascript
plugins: [
    new ExtractTextPlugin('styles.css')
]
```

[slide]

# 自动提取资源生成html文件

- 指定配置，编译时候自动生成引入资源的html文件：

```javascript
var HtmlWebpackPlugin = require('html-Webpack-plugin');
...
...

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
}
```

[slide]
# 一个综合的例子
```javascript
import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
let node_modules = path.resolve(__dirname, 'node_modules');
let DEPLOY = process.env.webpack_deploy;
let entry = {
    mobile: path.resolve(__dirname, 'app/mobile.js')
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
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
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


```
[slide]
# 总结和注意事项
* webpack优势: `加载器配置`、`兼容多种模块规范`、`支持多种资源打包`、`独立模块和公共模块`
* gulp: 利用nodejs管道，配置简单，插件众多，插件编写简单
* webpack + gulp 构造ES6/7工作流
* 使用babel(5.8.3和webpack时候注意使用稳定版本。(注: 2015/12/13)

[slide]
# 参考资料

*  <a href="http://webpack.github.io/">webpack 官网</a>
*  <a href="http://gulpjs.com/">gulp</a>
*  <a href="http://babeljs.io/">babel</a>
*  <a href="https://github.com/ampedandwired/html-webpack-plugin">html-webpack-plugin</a>
*  <a href="https://github.com/kangax/html-minifier#options-quick-reference">html-minifier</a>
*  <a href="http://webpack.github.io/docs/webpack-dev-server.html">webpack-dev-server</a>
*  <a href="http://es6.ruanyifeng.com/">ES6入门</a>
*  <a href="http://www.w3ctech.com/topic/1513">2015: 前端工具现状</a>

[slide]
# Q & A
* Email: <a href="javascript: void 0">321jiangtao@gmail.com</a>
* Slide: <a href="http://jthwong.github.io/shares/doc/es67workflow.htm">搭建ES6/7工作流搭建</a>
