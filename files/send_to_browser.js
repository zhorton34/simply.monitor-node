let send = require('send')
let http = require('http')

const monitor = function (file = '../dummy/send-dummy-content-for-browser.txt', port = 3000) {
    console.log({ file, port })
    http.createServer(function onRequest(req, res) {
        send(req, file).pipe(res)
    })

    server.listen(port)
}


module.exports = {
    send,
    monitor,
}