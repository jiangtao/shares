/**
 * Created by jiangtao on 1/28/16.
 */
'use strict';
const EventEmitter = require('events');
const util = require('util');
let MyEmitter = function () {
    EventEmitter.call(this);
};

util.inherits(MyEmitter, EventEmitter);

const myEmitter = new MyEmitter();
myEmitter.on('error', function (e) {
    console.log(e.type, e.reason);
});
myEmitter.on('take money', (e) => {
    if (e.type === 'error') {
        myEmitter.emit('error', {
            type: 'error',
            isTrusted: e.reason.length > 0,
            reason: e.reason
        });
    } else if (e.type === 'go') {
        try {
            console.log(unknown_variable);
        } catch (e) {
            myEmitter.emit('error', {type: 'invalid_syntax', reason: e.message});
        }
    }
});
//myEmitter.emit('take money', {type: 'error', reason: '工作人员挂牌休息了'});
myEmitter.emit('take money', {type: 'go'});