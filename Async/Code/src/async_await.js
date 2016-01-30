/**
 * Created by jiangtao on 12/9/15.
 */
import {readFile, readdir} from './pack_promise';
import fs from 'fs';
import path from 'path';
async function asyncReadFile2() {
    var target = '../data/';
    var files = await readdir(target);
    var a = [];
    for (let f of files) {
        a.push(await readFile(path.join(__dirname, target, f)));
    }
    return a.join('\n');
}

