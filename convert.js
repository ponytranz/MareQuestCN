const fs = require('fs')

for (let path of ['2022', '2023']) {
  let { Strings: o } = JSON.parse(fs.readFileSync(`${path}/exported.json`, 'utf-8'))
  let res = o.map((v, i) => ({ key: i.toString(), original: v }))
  res = JSON.stringify(res, null, 2)
  fs.writeFileSync(`${path}/paratranz.json`, res)
}
