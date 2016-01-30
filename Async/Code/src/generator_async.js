/**
 * Created by jiangtao on 1/30/16.
 */
import baseBabel from './babel_base';

var gen = function* () {
    var p1 = readFile(path.join(__dirname, '../data/file1.txt'));
    var p2 = readFile(path.join(__dirname, '../data/file2.txt'));
};

var g = gen();

var r1 = g.next();
r1.value(function (err, data) {
    if (err) throw err;
    var r2 = g.next(data);
    r2.value(function (err, data) {
        if (err) throw err;
        g.next(data);
    });
});
