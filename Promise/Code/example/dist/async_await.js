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
                return regeneratorRuntime.awrap((0, _base.readFile)(_path2['default'].join(__dirname, '../data/file1.txt')));

            case 2:
                f1 = context$1$0.sent;
                context$1$0.next = 5;
                return regeneratorRuntime.awrap((0, _base.readFile)(_path2['default'].join(__dirname, '../data/file2.txt')));

            case 5:
                f2 = context$1$0.sent;
                return context$1$0.abrupt('return', f1.toString() + '\n' + f2.toString());

            case 7:
            case 'end':
                return context$1$0.stop();
        }
    }, null, this);
}
function asyncReadFile2() {
    var target, files, a, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, f;

    return regeneratorRuntime.async(function asyncReadFile2$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                target = '../data/';
                context$1$0.next = 3;
                return regeneratorRuntime.awrap((0, _base.readdir)(target));

            case 3:
                files = context$1$0.sent;
                a = [];
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                context$1$0.prev = 8;
                _iterator = files[Symbol.iterator]();

            case 10:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                    context$1$0.next = 20;
                    break;
                }

                f = _step.value;
                context$1$0.t0 = a;
                context$1$0.next = 15;
                return regeneratorRuntime.awrap((0, _base.readFile)(_path2['default'].join(__dirname, target, f)));

            case 15:
                context$1$0.t1 = context$1$0.sent;
                context$1$0.t0.push.call(context$1$0.t0, context$1$0.t1);

            case 17:
                _iteratorNormalCompletion = true;
                context$1$0.next = 10;
                break;

            case 20:
                context$1$0.next = 26;
                break;

            case 22:
                context$1$0.prev = 22;
                context$1$0.t2 = context$1$0['catch'](8);
                _didIteratorError = true;
                _iteratorError = context$1$0.t2;

            case 26:
                context$1$0.prev = 26;
                context$1$0.prev = 27;

                if (!_iteratorNormalCompletion && _iterator['return']) {
                    _iterator['return']();
                }

            case 29:
                context$1$0.prev = 29;

                if (!_didIteratorError) {
                    context$1$0.next = 32;
                    break;
                }

                throw _iteratorError;

            case 32:
                return context$1$0.finish(29);

            case 33:
                return context$1$0.finish(26);

            case 34:
                return context$1$0.abrupt('return', a.join('\n'));

            case 35:
            case 'end':
                return context$1$0.stop();
        }
    }, null, this, [[8, 22, 26, 34], [27,, 29, 33]]);
}
(function callee$0$0() {
    return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                context$1$0.prev = 0;
                context$1$0.t0 = console;
                context$1$0.next = 4;
                return regeneratorRuntime.awrap(asyncReadFile2());

            case 4:
                context$1$0.t1 = context$1$0.sent;
                context$1$0.t0.log.call(context$1$0.t0, context$1$0.t1);
                context$1$0.next = 11;
                break;

            case 8:
                context$1$0.prev = 8;
                context$1$0.t2 = context$1$0['catch'](0);

                console.log(context$1$0.t2.message);

            case 11:
            case 'end':
                return context$1$0.stop();
        }
    }, null, this, [[0, 8]]);
})();

//console.log(await asyncReadFile())