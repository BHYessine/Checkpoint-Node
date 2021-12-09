const http = require('http')
const bl = require('bl')
let results = []
let count = 0

for (let i = 0; i < 3; i++) {
    http.get(process.argv[2 + i], (res) => {
        res.pipe(bl((err, data) => {
          err ? console.error(err) :    
          results[i] = data.toString()
          count++
    
          if (count == 3) 
          for (let i = 0; i < 3; i++) console.log(results[i])
        }))
      })
}
