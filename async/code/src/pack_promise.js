import fs from 'fs';
import path from 'path';
import babelBase from './babel_base';

/**
 * @description read file
 * @param fileName
 * @returns {Promise}
 */
export const readFile = fileName => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    });
};
/**
 * @description read dir
 * @param folder
 * @returns {Promise}
 */
export const readdir = (folder) => {
    return new Promise((resolve, reject) => {
        fs.readdir(path.resolve(__dirname, folder), (err, files) => {
            if (err) reject(err);
            resolve(files);
        })
    });
};