const fs = require('fs')
const path = require('path')

const files = process.argv[2]
const extension = '.' + process.argv[3]

fs.readdir(files, (err, list) => {
  err ? console.error(err) :
  list.forEach((file) => {
      (path.extname(file) === extension) && console.log(file)      
  })
})