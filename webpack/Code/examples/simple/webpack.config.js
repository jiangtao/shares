var webpack = require('webpack');
var _rootName;
try{
    _rootName = __dirname
}catch(e){
    _rootName = path.resolve(path.dirname())
}
module.exports = {
  entry: _rootName + '/src/app.js',
  output: {
    path: _rootName + '/dist/',
    publicPath: "/dist/",
    filename: 'main.js'
  }
};