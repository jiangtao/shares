title: 使用webpack前端工作流搭建
speaker: 江涛
url: http://jthwong.github.io/shares/doc/webpack.htm
transition: card
files: /css/demo.css,/img

[slide]

# 使用webpack前端工作流搭建
## 分享人：江涛 

[slide]

# 什么是webpack

* 具有Grunt、Gulp对于静态资源自动化构建的能力
* 静态资源打包工具
* 兼容多种JS书写规范，具有更强大的JS模块化功能
> Webpack是一个出色的前端自动化构建工具、模块化工具、资源管理工具


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

##  复杂的配置---公共文件提取

*使用了一个 CommonsChunkPlugin 的插件，它用于提取多个入口文件的公共脚本部分，然后生成一个 common.js 来方便多页面之间进行复用

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
        extensions: ['.js', '.less', '.css'],
        alias: {
            moment: "moment/min/moment-with-locales.min.js"
        }
    }
    ```


[slide]

## 模块加载器

*  模块：静态的文件，比如：JavaScript，CSS，LESS，TypeScript，JSX，CoffeeScript，图片等等
*  文件配置： 通过正则表达式对文件名进行匹配
*  对于不同的模块有其对应的模块加载器，它们可以进行串联

```javascript
module: {
    loaders: [{
        test: /\.less/,
        loader:  'style-loader!css-loader!less-loader'
    }, {
      test: /\.(png|jpe?g)$/,
      loader: 'url-loader?limit=10000&name=build/[name].[ext]'
    }]
}
```
* require()还支持在资源path前面指定loader，即require(![loaders list]![source path])形式
```javascript
require(“style!css!less!./mystyles.less”);
```


[slide]

##  不同规范的模块加载实现（AMD、CommonJS、ES6）

*  CommonJS的require函数则是同步加载---使用require.ensure实现兼容
*  AMD是模块异步加载并保证执行顺序---使用require实现兼容
*  ES6中使用import实现模块的引入---使用Babel实现兼容

在Webpack中推荐CommonJS方式去加载模块，这种方式语法更加简洁直观。

[slide]

## webpack内部实现命令不同

*  require.ensure (CommonJs)
```javascript
require.ensure(["module-a", "module-b"], function(require) {
    var a = require("module-a");
    // ...
});
```
*  require (AMD)
```javascript
require(["module-a", "module-b"], function(a, b) {
    // ...
});
```
*  require.include (request)
```javascript
require.ensure([], function(require) {
    require.include("./file");
    require("./file2");
});
```
[slide]

# code-splitting

* 对于一个大的web应用把所有代码放到一个文件中是很低效的。特别是如果有些代码块只是在特定环境下需要。
* webpack可以通过智能分析，将代码库分解成不同的chunks，可以提取公共部分，可以根据‘需求’拆分chunk，实现按需加载chunk。

[slide]

##  模块的引用

*  使用require方式直接引用静态文件
*  CSS 被转化为 style 标签

    ```javascript

    require('./myapp.less');
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

##  Webpack-dev-server 开发服务器

*  基于Node.js Express框架的轻量开发服务器
*  静态资源Web服务器
*  开发中会监听文件的变化实时打包

对于简单静态页面或者仅依赖于独立服务的前端页面，都可以直接使用这个开发服务器进行开发。

[slide]

*  Webpack开发服务器需要单独安装，同样是通过npm进行：
    ```javascript
    npm install -g webpack-dev-server
    ```
*  启动命令如下：
    ```javascript
    webpack-dev-server --content-base build/ --hot
    ```

[slide]

## 参考资料

*  <a href="http://webpack.github.io/">webpack 官网</a>
*  <a href="http://segmentfault.com/a/1190000002551952">Webpack 入门指迷</a>
*  <a href="https://github.com/petehunt/webpack-howto"> Webpack how to</a>
*  <a href="http://segmentfault.com/a/1190000003499526">基于webpack搭建前端工程解决方案探索</a>
*  <a href="http://www.jianshu.com/p/8adf4c2bfa51">Webpack-dev-server结合后端服务器的热替换配置</a>
*  <a href="https://fakefish.github.io/react-webpack-cookbook/">Webpack 和 React 小书</a>
*  <a href="http://www.w3ctech.com/topic/1513">2015: 前端工具现状</a>

[slide]

# 联系方式

*  **Email:** <a href="mailto:321jiangtao@gmail.com">321jiangtao@gmail.com</a>
*  **Github:** <a href="https://github.com/jtHwong">https://github.com/jtHwong</a>
