import {readFile, readdir} from './base';
import path from 'path';
let gen = function* () {
    yield readFile(path.join(__dirname, '../data/file404.txt'));
    yield readFile(path.join(__dirname, '../data/file2.txt'));
    return true;
};


let execute = gen();
let pF1 = execute.next().value;
let pF2 = execute.next().value;
pF1.then(function (data) {
    console.log('f1', data.toString());
}).catch(function (err) {
    console.log('f1', err);
}).then(function () {
    return pF2;
}).then(function (data) {
    console.log('f2', data.toString());
}).catch(function (err) {
    console.log('f2', err);
});
