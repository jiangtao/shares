'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _babelCoreRegister = require('babel-core/register');

var _babelCoreRegister2 = _interopRequireDefault(_babelCoreRegister);

var readFile = function readFile(fileName) {
    return new Promise(function (resolve, reject) {
        _fs2['default'].readFile(fileName, function (err, data) {
            if (err) reject(err);
            resolve(data);
        });
    });
};

exports.readFile = readFile;
var readdir = function readdir(folder) {
    return new Promise(function (resolve, reject) {
        _fs2['default'].readdir(_path2['default'].resolve(__dirname, folder), function (err, files) {
            if (err) reject(err);
            resolve(files);
        });
    });
};
exports.readdir = readdir;