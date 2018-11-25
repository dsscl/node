// Connect是Node.js的一个模块，提供中间件框架
// Connect中的中间件只是一个以请求、响应对象和下一个回调作为参数的函数
// 我们可以将中间件想象成一个函数清单，一个请求在到达应用程序逻辑之前必须经过这个清单中的每个函数
// 最为基础的中间件示例是一个仅仅将请求往前传递的函数
function nothingMiddleware(req, res, next) {
    next()
}
// 当next()回调函数被调用时，中间件就完成了工作，请求被传递到了下一个中间件或者在没有其他中间件的情况下进入应用层
// Connect中的Hello World服务器
var connect = require('connect')
var http = require('http')

var app = connect()
    .use(helloWorld)

function helloWorld(req, res) {
    res.writeHead(200, {'Content-Type': 'text.plain'});
    res.end('Hi! Hello World')
}

http.Server(app).listen(3000)

// 功能上，与Node的HTTP模块没有任何区别，但使用Connect包装HTTP模块可以将中间件添加到标准HTTP模块上
// ps：本例中使用了Node的HTTP模块，而且将Connect应用程序传递给了http.Server
// Hello World这一响应实际上也是中间件本身的一部分