/**
 * Created by jiangtao on 12/9/15.
 */
import {readFile, readdir} from './base';
import fs from 'fs';
import path from 'path';
async function asyncReadFile() {
    var f1 = await readFile(path.join(__dirname, '../data/file1.txt'));
    var f2 = await readFile(path.join(__dirname, '../data/file2.txt'));
    return `${f1.toString()}\n${f2.toString()}`;
}
async function asyncReadFile2() {
    var target = '../data/';
    var files = await readdir(target);
    //var a = [];
    //for(const f of files){
    //    a.push(await readFile(path.join(__dirname, target, f)));
    //}
    //return a.join('\n');
    return files.map(function(f){
       return await readFile(path.join(__dirname, target, f))
    });
}
(async function () {
    //console.log(await asyncReadFile())
    try {
        console.log(await asyncReadFile2())

    }catch(e){
        console.log(e.message)
    }
})();
