/**
 * Created by jiangtao on 2/1/16.
 */
import {readFile, readdir} from './pack_thunk';
import babelBase from './babel_base';
import path from 'path';
import util from 'util';
const isGenerator = (g) => {
    return g.constructor.name === 'GeneratorFunction';
};
const run = (gen) => {
    //if (!isGenerator(gen)) throw new Error('arguments is valid generator');
    var g = gen();
    var counter = 0;
    var perform = function (result) {
        console.log(++counter, result.value, result.done);
        if (result.done === true) {
            return new Promise(function (resolve) {
                resolve(result.value);
            })
        }
        return result.value(function (err, data) {
            if (err) throw err;
            perform(g.next(data));
        });

    };
    return perform(g.next());
};

const generator = function* () {
    var f1 = yield readFile(path.resolve(__dirname, '../data/file1.txt'));
    console.log(f1.toString());
    var f2 = yield readFile(path.resolve(__dirname, '../data/file2.txt'));
    console.log(f2.toString());
    return `${f1.toString()}\n${f2.toString()}`;
};
run(generator)