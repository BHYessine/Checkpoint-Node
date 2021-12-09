const net = require('net')

const server = net.createServer((socket) => {
    socket.end(date() + '\n')
})
server.listen(Number(process.argv[2]))

const format = (i) => {
  return (i < 10 ? '0' : '') + i
}

const date = () => {
  const date = new Date()
  return date.getFullYear() + '-'
    + format(date.getMonth() + 1) + '-'
    + format(date.getDate()) + ' '
    + format(date.getHours()) + ':'
    + format(date.getMinutes())
}

