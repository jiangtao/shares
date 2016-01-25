'use strict';var _base = require('./base');var _fs = require('fs');var _fs2 = _interopRequireDefault(_fs);var _path = require('path');var _path2 = _interopRequireDefault(_path);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _asyncToGenerator(fn) {return function () {var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {function step(key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {return Promise.resolve(value).then(function (value) {return step("next", value);}, function (err) {return step("throw", err);});}}return step("next");});};} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Created by jiangtao on 12/9/15.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */var asyncReadFile = function () {var ref = _asyncToGenerator(regeneratorRuntime.mark(



    function _callee() {var 



        p1, 
        p2, _ref, 
        f1, f2;return regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0: // f1读完 再读f2
                        //var f1 = await readFile(path.join(__dirname, '../data/file1.txt'));
                        //var f2 = await readFile(path.join(__dirname, '../data/file2.txt'));
                        p1 = (0, _base.readFile)(_path2.default.join(__dirname, '../data/file1.txt'));p2 = (0, _base.readFile)(_path2.default.join(__dirname, '../data/file2.txt'));_context.next = 4;return Promise.all([p1, p2]);case 4:_ref = _context.sent;f1 = _ref[0];f2 = _ref[1];return _context.abrupt('return', f1.toString() + '\n' + f2.toString());case 8:case 'end':return _context.stop();}}}, _callee, this);}));return function asyncReadFile() {return ref.apply(this, arguments);};}();var asyncReadFile2 = function () {var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {var 
        target, 
        files, 
        a, _iterator, _isArray, _i, _ref2, 
        f;return regeneratorRuntime.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:target = '../data/';_context2.next = 3;return (0, _base.readdir)(target);case 3:files = _context2.sent;a = [];_iterator = files, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();case 6:if (!_isArray) {_context2.next = 12;break;}if (!(_i >= _iterator.length)) {_context2.next = 9;break;}return _context2.abrupt('break', 24);case 9:_ref2 = _iterator[_i++];_context2.next = 16;break;case 12:_i = _iterator.next();if (!_i.done) {_context2.next = 15;break;}return _context2.abrupt('break', 24);case 15:_ref2 = _i.value;case 16:f = _ref2;_context2.t0 = 
                        a;_context2.next = 20;return (0, _base.readFile)(_path2.default.join(__dirname, target, f));case 20:_context2.t1 = _context2.sent;_context2.t0.push.call(_context2.t0, _context2.t1);case 22:_context2.next = 6;break;case 24:return _context2.abrupt('return', 

                        a.join('\n'));case 25:case 'end':return _context2.stop();}}}, _callee2, this);}));return function asyncReadFile2() {return ref.apply(this, arguments);};}();

_asyncToGenerator(regeneratorRuntime.mark(function _callee3() {return regeneratorRuntime.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.t0 = 
                    console;_context3.next = 3;return asyncReadFile();case 3:_context3.t1 = _context3.sent;_context3.t0.log.call(_context3.t0, _context3.t1);case 5:case 'end':return _context3.stop();}}}, _callee3, this);}))();