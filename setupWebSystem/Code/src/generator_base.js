/**
 * Created by jiangtao on 1/30/16.
 */
import babelBase from './babel_base';
function* gen(x) {
    try {
        yield (x + 10); // 1
        //yield n + 1; // 2  error
        yield (x + ''); // 3
        yield (x * x);// 4
        return 'done'; // 5
    } catch (e) {
        console.log(e);
    }
}

var g = gen(10);
var sum = g.next();  // 1
//var error = g.next(); // 2
var str = g.next(); // 3
var sqrt = g.next(); // 4
var result = g.next(); // 5
// g.throw('error'); // 可以在生成器外 主动控制错误，异常错误也可以处理
console.log(sum.value, str.value, sqrt.value, result.value);
