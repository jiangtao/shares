/**
 * Created by jiangtao on 1/29/16.
 */
import {readdir, readFile} from './pack_promise';
import path from 'path';
var path1 = path.resolve(__dirname, '../data/file1.txt');
var path2 = path.resolve(__dirname, '../data/file2.txt');
var errorPath = path.resolve(__dirname, '../data/file5.txt');
readFile(path1).then(function (data) {
    console.log(data.toString());
    return readFile(path2);
}).then(function (data) {
    console.log(data.toString());
    return readFile(errorPath);
}).then(function (data) {
    console.log(data.toString());
}).catch(function (e) {
    console.log('error', e);
    return readFile(path1);
}).then(function (data) {
    console.log(data.toString());
});