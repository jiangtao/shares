import fs from 'fs';
import path from 'path';
import babelPolyfill from 'babel-polyfill';
import babelRegister from 'babel-core/register';

export let readFile = fileName => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    });
};

export let readdir = (folder) => {
    return new Promise((resolve, reject) => {
        fs.readdir(path.resolve(__dirname, folder), (err, files) => {
            if (err) reject(err);
            resolve(files);
        })
    });
};