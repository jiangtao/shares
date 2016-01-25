'use strict';var _base = require('./base');var _path = require('path');var _path2 = _interopRequireDefault(_path);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var gen = regeneratorRuntime.mark(function gen() {return regeneratorRuntime.wrap(function gen$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                        (0, _base.readFile)(_path2.default.join(__dirname, '../data/file1.txt')));case 2:_context.next = 4;return (
                        (0, _base.readFile)(_path2.default.join(__dirname, '../data/file2.txt')));case 4:return _context.abrupt('return', 
                    true);case 5:case 'end':return _context.stop();}}}, gen, this);});



var execute = gen();
var pF1 = execute.next().value;
var pF2 = execute.next().value;
pF1.then(function (data) {
    console.log('f1', data.toString());}).
catch(function (err) {
    console.log('f1', err);}).
then(function () {
    return pF2;}).
then(function (data) {
    console.log('f2', data.toString());}).
catch(function (err) {
    console.log('f2', err);});