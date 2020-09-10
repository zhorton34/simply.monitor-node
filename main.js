let http = require('http')
let send = require('send')

let server = http.createServer(function onRequest(req, res) {
    send(req, './package.json').pipe(res)
})

server.listen(3000)