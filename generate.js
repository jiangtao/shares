#!/usr/bin/env node
'use strict'

const child_process = require('child_process')
const fs = require('fs')
const shell_target = "(if [ -d doc ];then  rm -fr doc; fi) && find . -name '*.md' | grep 'ppt' | xargs egrep '^title|^url'"
const execSync = child_process.execSync

let targetList = execSync(shell_target, { encoding: 'utf8' })
let content = `---
## 关于前端的一些总结和分享
* npm install -g nodeppt
* nodeppt start -p 9999 -d \`target_dir\`

### 本地跑起来

\`\`\`bash
git clone https://github.com/jiangtao/shares.git
cd shares
npm run
\`\`\`


#### 分享地址`
let footer = `

##### TODO
* [Todo List](TODO.md)
`

let infoList = targetList.split(/\r\n|\n/).filter((item) => item.length != 0)
let len = infoList.length
let getInfo = (str) => {

  var urlMark = /\:url\:/
  var titleMark = /\:title\:/
  if (titleMark.test(str)) {
    return str.split(titleMark)
  } else if (urlMark.test(str)) {

    return str.split(urlMark)
  }
}

for (let i = 0; i < len;) {

  var match = getInfo(infoList[i])
  var doc = match[0]
  var info = getInfo(infoList[i + 1])

  execSync(`nodeppt generate ${doc}  -a ./doc`)

  console.log()
  console.log(`${blue(doc)} nodeppt doc generate successfully`)

  // generate dir
  if(info) {
    content += `\n* [${match[1].trim()}](${info[1].trim()})`
  } else {
    break
  }

  i += 2
}

content += footer

fs.writeFile('./README.md', content, { encoding: 'utf8' }, (err) => {
  if (err) throw err
  console.log()
})

function blue(str) {
  return '\x1b[1m\x1b[34m' + str + '\x1b[39m\x1b[22m'
}
