import React from 'react';
import ReactDom from 'react-dom';
import Hello from './models/hello.jsx';
import register from 'babel-core/register';
ReactDom.render(<Hello />, document.getElementById('app'));


async function sleep(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve();
        }, timeout);
    });
}
(async function () {
    await sleep(3000);
    console.log('after 3s');
})();
