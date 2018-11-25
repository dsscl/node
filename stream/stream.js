// 流通常是Node.js移动数据的方式
// 1、流使得在接收数据的时候就开始处理数据成为可能，无论文件有多大
// var fs = require('fs')
// var stream = fs.ReadStream('name.txt')
// stream.setEncoding('utf8')
// var data = ''
// stream.on('data', function(chunk) {
//     data += chunk
//     console.log('read some data')
// })
// stream.on('close', function() {
//     console.log('all the data is read')
//     console.log(data)
// })

// 2、可写流
// var fs = require('fs')
// var readableStream = fs.ReadStream('name.txt')
// var writableStream = fs.WriteStream('out.txt')

// readableStream.setEncoding('utf8')
// readableStream.on('data', function(chunk) {
//     writableStream.write(chunk)
// })
// readableStream.on('close', function() {
//     writableStream.end()
// })

// 3、通过管道连接流
// var fs = require('fs')
// var readableStream = fs.ReadStream('name.txt')
// var writableStream = fs.WriteStream('out.txt')
// readableStream.pipe(writableStream)

// 4、流的MP3
var http = require('http')
var fs = require('fs')
http.createServer(function(request, response) {
    var mp3 = '/KuGou/amazing.mp3'
    // var mp3 = '/photo/VID_20150607_180436.mp4'
    var stat = fs.statSync(mp3)

    response.writeHead(200, {
        'Content-type': 'audio/mpeg',
        'Content-Length': stat.size
    })

    var readableStream = fs.createReadStream(mp3)
    readableStream.pipe(response)
}).listen(3000)