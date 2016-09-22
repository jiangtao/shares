/**
 * Created by jiangtao on 1/26/16.
 */
import fs from 'fs';
import path from 'path';

fs.readFile(path.resolve(__dirname, '../../data/user.json'), (err, data) => {
    if (err) throw err;
    console.log('fetch user', data.toString('utf8'));
    fs.readFile(path.resolve(__dirname, '../../data/user_store.json'), (err, data) => {
        if (err) throw err;
        console.log('user store', data.toString('utf8'));
    });
});

/*
doSth1((...args, callback) => {
    doSth2((...args, callback) => {
        doSth3((...args, callback) => {
            doSth4((...args, callback) => {
                doSth5((...args, callback) => {

                })
            })
        })
    })
});
*/

setTimeout(() => {
    console.log('after 100ms');
}, 100)