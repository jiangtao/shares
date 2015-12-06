# 为什么要搭建前端开发工作流？

随着互联网发展项目越来越复杂，webApp复杂度的提升，前端也变得很庞大和复杂。渐渐的产生了一些问题:

* 代码庞大难以维护
* 性能优化难做
* 开发成本变高

> 为了应对以上问题工作流的产生.

# 构建依赖关系发展

1. document.write构建依赖
2. 动态语言构建依赖
3. `AMD` 和 `commonjs`的出现 ( `requirejs`, `commonjs` )
4. Node的出现 各种构建工具： [grunt](http://gruntjs.com/sample-gruntfile) [gulp](http://gulpjs.org/)

# 前端语言开发工具发展

1. 最初开始： html/css/js
2. 各种工具的出现：jade/ejs (sass/less/stylus)  coffee/typescript
3. ES2015的发布：module export import

# 工具需要做的哪些事儿:

* `脚手架`: 生成常用的开发结构
* `提高开发效率`:  编译sass / less 生成css
* `提高开发效率`:  验证代码错误，从开发层面防止不必要的错误
* `提高开发效率`:  使用typescript/ coffee 规范代码, 保证团队代码一致性
* `减少http请求`: 小图标转成base64, 约定8k以下压缩
* `减少http请求`: 多图标合并到一张图。 或人工处理，或compass等工具处理
* `减少http请求`: 压缩m个css文件，合并到n个文件 或 直接内联到style中
* `减少http请求`: 压缩m个js文件, 合并到n个文件
* `生成版本号`: 生成版本号 防止浏览器缓存
* `版本管理`: 版本管理 用于线上发布
* `组件模块`: 包含css, js, html
* `解放引用`:  能自动帮忙解决html引用
* `其他功能`:  欢迎吐槽补充
