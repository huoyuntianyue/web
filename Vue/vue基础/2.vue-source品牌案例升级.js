const http = require('http')
const urlModel = require('url')

const server = http.createServer()
server.on('request', function (req, res) {
    var {pathname: url, query} = urlModel.parse(req.url , true)
    data ={
        status:0,
        message:[
            {id:1, name: '五菱宏光', cTime: new Date()},
            {id:2, name: '大众', cTime: new Date()}
        ]
    }
    if(url === "/getData"){
        res.end(data)
    }else {
        res.end("404")
    }
})

server.listen('3000', function () {
    console.log('server listen at "127.0.0.1:3000"')
})
