const http = require('http')
const url = require('url')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime : time.getTime() }
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true)
  const time = new Date(parsedUrl.query.iso)
  let result

   (/^\/api\/parsetime/.test(req.url)) ?
    result = parsetime(time)
  : (/^\/api\/unixtime/.test(req.url))?
    result = unixtime(time) : null

  result ? (
    res.writeHead(200, { 'Content-Type': 'application/json' }),
    res.end(JSON.stringify(result))
  ) : (
    res.writeHead(404),
    res.end()
  )
})
server.listen(Number(process.argv[2]))