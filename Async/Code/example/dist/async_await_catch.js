'use strict';var _base = require('./base');var _fs = require('fs');var _fs2 = _interopRequireDefault(_fs);var _path = require('path');var _path2 = _interopRequireDefault(_path);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _asyncToGenerator(fn) {return function () {var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {function step(key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {return Promise.resolve(value).then(function (value) {return step("next", value);}, function (err) {return step("throw", err);});}}return step("next");});};} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Created by jiangtao on 12/9/15.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */var asyncReadFile = function () {var ref = _asyncToGenerator(regeneratorRuntime.mark(



    function _callee() {var 
        f1, 



        f2;return regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (0, _base.readFile)(_path2.default.join(__dirname, '../data/file11.txt')).catch(function (e) {//console.log(e);
                            return false;});case 2:f1 = _context.sent;_context.next = 5;return (0, _base.readFile)(_path2.default.join(__dirname, '../data/file2.txt'));case 5:f2 = _context.sent;if (!(f1 && f2)) {_context.next = 10;break;}return _context.abrupt('return', 
                        f1.toString() + '\n' + f2.toString());case 10:return _context.abrupt('return', 

                        false);case 11:case 'end':return _context.stop();}}}, _callee, this);}));return function asyncReadFile() {return ref.apply(this, arguments);};}();



_asyncToGenerator(regeneratorRuntime.mark(function _callee2() {return regeneratorRuntime.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.t0 = 
                    console;_context2.next = 3;return asyncReadFile();case 3:_context2.t1 = _context2.sent;_context2.t0.log.call(_context2.t0, _context2.t1);case 5:case 'end':return _context2.stop();}}}, _callee2, this);}))();