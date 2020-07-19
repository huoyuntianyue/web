const http = require('http')
const urlModule = require('url')

const server = http.createServer()

server.on('request',function (req, res) {
    // var url = req.url
    const { pathname: url, query} = urlModule.parse(req.url, true)
    if(url === '/getscript'){
        var data = {
            name: '小红',
            gender: "女孩",
            age: 18
        }

        var scriptStr = `${query.callback}(${JSON.stringify(data)})`
        res.end(scriptStr)
    }else {
        res.end('404')
    }
})

server.listen('3000', function () {
    console.log('服务器监听的是  http:127.0.0.1:3000 端口')
})
