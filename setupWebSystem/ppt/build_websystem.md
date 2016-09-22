title: 搭建一个前端的web系统
speaker: 江涛
url: http://Jerret321.github.io/shares/publish/build_websystem.htm
transition: slide3
files: /css/moon.css,/img

[slide]

##使用前端技术快速搭建一个稳定web system
## 分享人：江涛 

[slide]

##背景

> 自13年以来，前端变化迅速，主要体验下以下技术的发展
- Node (各种框架百花齐放： express, koa, meteor, egg, ...)
- MV-
- Javascript本身的发展 
- Webpack

[slide]

##如何选择框架， 基于以下几点
- 团队
- 框架本身
- 业务

[slide]

## 团队
- 组织架构 (部分公司是木有所谓的全栈职位， 以及node 或从其他岗位转型)
- 团队能力 (主要学习力, 包含英语阅读能力， 理解能力)

[slide]

## 框架
- 是否靠谱团队维护 (所谓靠谱， 是否持续维护，是否有问题能)
- 是否考虑兼容 (版本升级等问题) 
- 是否平缓介入新的技术 （技术不断迭代）
- 是否生态（组件）完善 (避免重复轮子，基于轮子做适用于自己开发)
- 是否有文档和例子支持 (林子大了什么鸟都有，有文档可以事半功倍)
- 是否有良好的扩展（plugin）支持 
- 是否有社区支持 （ 良好的社区便于交流 ）
- 良好的编码风格 ( 代码写的跟渣渣似得，出了问题也不好定位不是 )

[slide]

## 业务
- 场景是否适合 (复杂度， 便利性, 兼容性)
- 开发时间

[slide]

##后端为什么选择thinkjs
- npm强大的生态光环之下 
- 对于我们来说 大伙熟悉thinkphp， thinkjs很多理念参考 thinkphp的，可快上手
- 开发环境集成，不用费过多的时间去集成 
- 支持Promsie/ES6等
- github社区反馈快
- 版本考虑兼容，changelog详细
- 中文的

[slide]

##前端处理和选型

[slide]

## 使用 nunjucks
- 需要一些强大的helpers来处理
- 需要一定模板继承，复用和宏的支持 来面对比较复杂的页面处理
- 不用Plug(jade)的原因， 我们是前端开发者，jade虽然干净，但对我司好多人来讲容易犯错， 也没必要为了这个去适应很多
- 当然还有一些比较优秀的template， 比如ejs， artTemplate， xTemplate等等

## 部分交互过重， 过复杂的page使用vue来代替
- 内部有很多交互过于复杂，选择vue的原因很重要的是 相对于 react 较团队成员，上手快，学习成本低


[slide]
##参考资料
-  <a href="http://webpack.github.io/">thinkjs官方网站</a>
-  <a href="https://github.com/75team/thinkjs/issues">thinkjs issues</a>
-  <a href="https://www.imjiangtao.com/post/async-summary.html">异步编程小结</a>
-  <a href="https://cn.vuejs.org/">vue中文文档</a>
[slide]