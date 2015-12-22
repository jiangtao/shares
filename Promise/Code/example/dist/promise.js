'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _base = require('./base');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var gen = regeneratorRuntime.mark(function gen() {
    return regeneratorRuntime.wrap(function gen$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                context$1$0.next = 2;
                return (0, _base.readFile)(_path2['default'].join(__dirname, '../data/file404.txt'));

            case 2:
                context$1$0.next = 4;
                return (0, _base.readFile)(_path2['default'].join(__dirname, '../data/file2.txt'));

            case 4:
                return context$1$0.abrupt('return', true);

            case 5:
            case 'end':
                return context$1$0.stop();
        }
    }, gen, this);
});

var execute = gen();
var pF1 = execute.next().value;
var pF2 = execute.next().value;
pF1.then(function (data) {
    console.log('f1', data.toString());
})['catch'](function (err) {
    console.log('f1', err);
}).then(function () {
    return pF2;
}).then(function (data) {
    console.log('f2', data.toString());
})['catch'](function (err) {
    console.log('f2', err);
});