const fs = require('fs')
const path = require('path')

module.exports = (files, extension, callback) => {

  fs.readdir(files, (err, list) => {
    err ? callback(err) :
    list = list.filter((file) => {
      return path.extname(file) === extension
    })
    callback(null, list)
  })
}