/**
 * Created by jiangtao on 12/9/15.
 */
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _base = require('./base');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function asyncReadFile() {
    var f1, f2;
    return regeneratorRuntime.async(function asyncReadFile$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                context$1$0.next = 2;
                return regeneratorRuntime.awrap((0, _base.readFile)(_path2['default'].join(__dirname, '../data/file11.txt'))['catch'](function (e) {
                    //console.log(e);
                    return false;
                }));

            case 2:
                f1 = context$1$0.sent;
                context$1$0.next = 5;
                return regeneratorRuntime.awrap((0, _base.readFile)(_path2['default'].join(__dirname, '../data/file2.txt')));

            case 5:
                f2 = context$1$0.sent;

                if (!(f1 && f2)) {
                    context$1$0.next = 10;
                    break;
                }

                return context$1$0.abrupt('return', f1.toString() + '\n' + f2.toString());

            case 10:
                return context$1$0.abrupt('return', false);

            case 11:
            case 'end':
                return context$1$0.stop();
        }
    }, null, this);
}

(function callee$0$0() {
    return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                context$1$0.t0 = console;
                context$1$0.next = 3;
                return regeneratorRuntime.awrap(asyncReadFile());

            case 3:
                context$1$0.t1 = context$1$0.sent;
                context$1$0.t0.log.call(context$1$0.t0, context$1$0.t1);

            case 5:
            case 'end':
                return context$1$0.stop();
        }
    }, null, this);
})();