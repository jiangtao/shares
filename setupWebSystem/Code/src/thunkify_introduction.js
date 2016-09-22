/**
 * Created by jiangtao on 2/1/16.
 */
//import {readFile, readdir} from './pack_thunkify.js';
import {readFile, readdir} from './pack_thunk';

import path from 'path';
var readFile1 = readFile(path.resolve(__dirname, '../data/file1.txt'));
console.log(path.resolve(__dirname, '../data/file1.txt'))
readFile1(function (err, data) {
    if(err) throw err;
    console.log(data.toString());
});
