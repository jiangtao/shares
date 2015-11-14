var webpack = require('webpack');
var path = require('path');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

var _rootName;
try{
    _rootName = __dirname
}catch(e){
    _rootName = path.resolve(path.dirname())
}
var entryFiles = { 
    a: "./src/a.js", 
    b: "./src/b.js" ,
    c1: "./src/pages/c1.js",
    c2: "./src/pages/c2.js",
    c3: "./src/pages/c3.js",
    s1: "./src/pages/s1.js",
    s2: "./src/pages/s2.js",
};
for(var k in entryFiles){
    entryFiles[k] = path.resolve(path.join(_rootName ,entryFiles[k]));
}
console.log(entryFiles)
module.exports = {
    entry: entryFiles,
    output: { filename: _rootName + "/dist/[name].js" },
    plugins: [ 
        
        new CommonsChunkPlugin("./dist/pages/client.js", ["c1", "c2", "c3"]),
        new CommonsChunkPlugin("./dist/pages/server.js", ["s1", "s2"]),
        new CommonsChunkPlugin("./dist/common.js", ["./dist/pages/client.js", "./dist/pages/server.js"]),
    ]
};
