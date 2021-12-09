const http = require('http')
const map = require('through2-map')
const server = http.createServer((req, res) => {
    (req.method != 'POST')? res.end('send me a POST\n')   
    : req.pipe(map((chunk) => {
      return chunk.toString().toUpperCase()
    })).pipe(res)
})   
server.listen(Number(process.argv[2]))
