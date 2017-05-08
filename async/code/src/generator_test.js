/**
 * Created by jiangtao on 1/30/16.
 */
import babelBase from './babel_base';
function* gen(x) {
    try {
        var y = yield (x + 10);
        var m = yield  y + y;
        return m;
    } catch (e) {
        console.log(e);
    }
}


for(var i of g){
    console.log(i);
}

var g = gen(10);
var sum = g.next();
var concat = g.next(10);
var result = g.next('result');
console.log(sum.value, concat.value, result.value);

