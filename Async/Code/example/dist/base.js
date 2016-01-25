'use strict';exports.__esModule = true;exports.readdir = exports.readFile = undefined;var _fs = require('fs');var _fs2 = _interopRequireDefault(_fs);var _path = require('path');var _path2 = _interopRequireDefault(_path);var _babelPolyfill = require('babel-polyfill');var _babelPolyfill2 = _interopRequireDefault(_babelPolyfill);var _register = require('babel-core/register');var _register2 = _interopRequireDefault(_register);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}




var readFile = exports.readFile = function readFile(fileName) {
    return new Promise(function (resolve, reject) {
        _fs2.default.readFile(fileName, function (err, data) {
            if (err) reject(err);
            resolve(data);});});};




var readdir = exports.readdir = function readdir(folder) {
    return new Promise(function (resolve, reject) {
        _fs2.default.readdir(_path2.default.resolve(__dirname, folder), function (err, files) {
            if (err) reject(err);
            resolve(files);});});};