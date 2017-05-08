/**
 * Created by jiangtao on 2/1/16.
 */
import util from 'util';
const thunk = function (fn) {
    if (!util.isFunction(fn)) {
        throw new TypeError('thunk arguments valid Function');
    }
    return function () {
        var args = Array.prototype.slice.call(arguments, 0);
        return function (cb) {
            args.push(cb);
            return fn.apply(null, args);
        }
    }
};
export default thunk;