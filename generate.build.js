#!/usr/bin/env node

'use strict';

var child_process = require('child_process');
var fs = require('fs');
var shell_target = "find . -name '*.md' | grep 'ppt' | xargs egrep '^title|^url'";
var execSync = child_process.execSync;

var targetList = execSync(shell_target, { encoding: 'utf8' });
var content = '---\n###关于web和前端的一些分享\n\n* npm install -g nodeppt\n* nodeppt start -p 9999 -d webpack\n\n### 目录\n';
var infoList = targetList.split('\r\n').filter(function (item) {
    return item.length != 0;
});
var len = infoList.length;
var getInfo = function getInfo(str) {
    return str.split(/\:(?:title|url)\:/g);
};
if (len % 2 == 0) {
    for (var i = 0; i < len;) {
        var match = getInfo(infoList[i]);
        // generate doc
        execSync('nodeppt generate ' + match[0] + '  -a -o ./doc');
        console.log('nodeppt doc generate successfully');
        // generate dir
        content += '\n* [' + match[1] + '](' + getInfo(infoList[i + 1])[1] + ')';
        i = 2 * ++i;
    }
} else {
    console.warn('please check your infoList title url');
}
fs.writeFile('./README.md', content, { encoding: 'utf8' }, function (err) {
    if (err) throw err;
    console.log('README.md generate successfully');
});
