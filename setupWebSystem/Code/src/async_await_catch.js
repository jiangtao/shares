/**
 * Created by jiangtao on 12/9/15.
 */
import {readFile, readdir} from './pack_promise';
import fs from 'fs';
import path from 'path';
async function asyncReadFile() {
    var f1 = await readFile(path.join(__dirname, '../data/file11.txt')).catch((e) => {
        //console.log(e);
        return false;
    });
    var f2 = await readFile(path.join(__dirname, '../data/file2.txt'));
    if(f1 && f2){
        return f1.toString() + '\n' + f2.toString();
    } else {
        return false;
    }
}

(async function () {
    console.log( await asyncReadFile() );
})();
