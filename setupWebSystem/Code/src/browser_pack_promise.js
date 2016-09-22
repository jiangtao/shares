/**
 * Created by jiangtao on 1/30/16.
 */
// 如果想运行该代码在浏览器中，请使用webpack打包

export const loadImg = function (url) {
    return new Promise(function (resolve, reject) {
        var image = new Image();
        image.onload = resolve;
        image.onerror = reject;
        image.src = url;
    });
};
export const ajax = function (options) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(options.method, options.url, options.async);
        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                resolve(this.responseText);
            } else {
                reject();
            }
        };
        xhr.send(options.data);
    });
};