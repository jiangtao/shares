import {readFile, readdir} from './pack_promise.js';
import path from 'path';
import babelBase from './babel_base.js';
import co from 'co';
let gen = function* () {
    var f1 = yield readFile(path.join(__dirname, '../data/file1.txt'));
    var f2 = yield readFile(path.join(__dirname, '../data/file2.txt'));
    //var errorFile = yield readFile(path.join(__dirname, '../data/file5.txt'));
    return `${f1.toString()}\r\n${f2.toString()}`;
};

co(gen).then(function (data) {
    console.log(data);
}).catch(function (e) {
    console.log(e);
});


