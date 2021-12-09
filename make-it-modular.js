const mymodule = require('./mymodule.js')
const files = process.argv[2]
const extension = '.' + process.argv[3]

mymodule(files, extension, (err, list) => {
  err ? console.error(err) :
  list.forEach((file) => console.log(file))
})