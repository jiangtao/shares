#!/usr/bin/env node

'use strict';

const child_process = require('child_process');
const fs = require('fs');
const shell_target = "rm -r doc && find . -name '*.md' | grep 'ppt' | xargs egrep '^title|^url'";
const execSync = child_process.execSync;

let targetList = execSync(shell_target, { encoding: 'utf8' });
let content = `---
##关于前端的一些总结和分享
* npm install -g nodeppt
* nodeppt start -p 9999 -d \`target_dir\`

#### 传送门`;
let footer = `

#####Email
* [321jiangtao#gmail.com](mailto:321jiangtao@gmail.com)

#####TODO
* [Todo List](TODO.md)
`;
let infoList = targetList.split(/\r\n|\n/).filter(item => item.length != 0);
let len = infoList.length;
let getInfo = str => {
    var urlMark = /\:url\:/;
    var titleMark = /\:title\:/;
    if (titleMark.test(str)) {
        return str.split(titleMark);
    } else if (urlMark.test(str)) {

        return str.split(urlMark);
    }
};
console.log(infoList);
if (len % 2 == 0) {
    for (let i = 0; i < len;) {
        var match = getInfo(infoList[i]);
        // generate doc
        execSync(`nodeppt generate ${ match[0] }  -a -o ./doc`);
        console.log('nodeppt doc generate successfully');
        // generate dir
        content += `\n* [${ match[1].trim() }](${ getInfo(infoList[i + 1])[1].trim() }){:target="_blank"}`;
        i = 2 * ++i;
    }
} else {
    console.warn('please check your infoList title url');
}
content += footer;

fs.writeFile('./README.md', content, { encoding: 'utf8' }, err => {
    if (err) throw err;
    console.log('README.md generate successfully');
});
