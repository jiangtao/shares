/**
 * Created by jiangtao on 1/26/16.
 */
// 可以拿到异常
setTimeout(() => {
    try {
        throw new Error('unexpected error');
    } catch(e){
        console.log('error1', e.message);
    }
}, 100)
// 拿不到异常
try {
    setTimeout(() => {
        throw new Error('unexpected error');
    }, 100);
} catch (e) {
    console.log('error2', e.message);
}