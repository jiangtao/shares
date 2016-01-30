/**
 * Created by jiangtao on 12/9/15.
 */
import {readFile, readdir} from './pack_promise';
import fs from 'fs';
import path from 'path';
async function asyncReadFile() {
    // f1读完 再读f2
    //var f1 = await readFile(path.join(__dirname, '../data/file1.txt'));
    //var f2 = await readFile(path.join(__dirname, '../data/file2.txt'));
    var p1 = readFile(path.join(__dirname, '../data/file1.txt'));
    var p2 = readFile(path.join(__dirname, '../data/file2.txt'));
    var [f1, f2] = await Promise.all([p1, p2]);
    return `${f1.toString()}\n${f2.toString()}`;
}
async function asyncReadFile2() {
    var target = '../data/';
    var files = await readdir(target);
    var a = [];
    for(let f of files){
        a.push(await readFile(path.join(__dirname, target, f)));
    }
    return a.join('\n');
}
(async function () {
    console.log(await asyncReadFile());
    //try {
    //    console.log(await asyncReadFile2())
    //
    //}catch(e){
    //    console.log(e.message)
    //}
})();
