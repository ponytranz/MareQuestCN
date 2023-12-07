const fs = require('fs')
const { Strings: o } = require('./exported.json')

let res = o.map((v,i)=>({key: i.toString(), original: v}))
res = JSON.stringify(res, null, 2)
fs.writeFileSync(`paratranz.json`, res)
