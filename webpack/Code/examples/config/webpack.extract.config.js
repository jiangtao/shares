var webpack = require('webpack');
var path = require('path');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

var _rootName;
try{
    _rootName = __dirname
}catch(e){
    _rootName = path.resolve(path.dirname())
}
var entryFiles = { a: "./src/a.js", b: "./src/b.js" };
for(var k in entryFiles){
    entryFiles[k] = path.resolve(path.join(_rootName ,entryFiles[k]));
}
console.log(entryFiles)
module.exports = {
    entry: entryFiles,
    output: { filename: _rootName + "/dist/[name].js" },
    plugins: [ new CommonsChunkPlugin("./dist/common.js") ]
};
