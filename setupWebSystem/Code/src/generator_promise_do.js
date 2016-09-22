import {readFile, readdir} from './pack_promise.js';
import path from 'path';
import babelBase from './babel_base.js';
const isPromise = function (p) {
    return typeof p.then === 'function' && typeof p.catch === 'function';
};
const run = function (generator) {
    var g = generator();
    var counter = 0;
    var perform = function (result) {
        console.log(++counter, result.done, result.value)
        if (result.done === true) {
            return new Promise(function (resolve) {
                resolve(result.value);
            });
            //return result.value;
        }
        if (isPromise(result.value)) {
            return result.value.then(function (v) {
                return perform(g.next(v));
            }).catch(function (e) {
                return perform(g.throw(e));
            })
        }

    };
    return perform(g.next());
};
let gen = function* () {
    var f1 = yield readFile(path.join(__dirname, '../data/file1.txt'));
    var f2 = yield readFile(path.join(__dirname, '../data/file2.txt'));
    var errorFile = yield readFile(path.join(__dirname, '../data/file5.txt'));
    return `${f1.toString()}\r\n${f2.toString()}`;
};
run(gen).then(function (data) {
    console.log('finally result', data);
}).catch(function (e) {
    console.log(e);
});
