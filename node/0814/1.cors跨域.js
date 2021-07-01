const http = require('http');
http.createServer(function (request, response) {
    console.log("request comes from:", request.url);
    // CORS跨域请求设置请求头
    // 请求已经发送成功，响应也已经返回，但是因为不是同源，所以浏览器拦截了返回信息，因此报错
    response.writeHead(200, {
        'Access-Control-Allow-Origin': 'http://localhost:1235',
        "Access-Control-Allow-Headers": "X-Test-Cors, Content-Type,Content-Length, Authorization, Accept,X-Requested-With",
        "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS",
        'Access-Control-Max-Age': '1000'
    });
    response.end('123');
}).listen(1234, function () {
    console.log("server listening on 1234");
});