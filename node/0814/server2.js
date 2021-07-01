const http = require('http');
const fs = require('fs');


http.createServer(function (request, response) {
    console.log("request comes from:", request.url);
    // CORS跨域请求设置请求头
    // 请求已经发送成功，响应也已经返回，但是因为不是同源，所以浏览器拦截了返回信息，因此报错

    if(request.url === '/'){
        var con = fs.readFileSync('./test.html', 'utf8');
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        response.end(con);
    }
    if(request.url === '/script1.js'){
        response.writeHead(200, {
            'Content-Type': 'text/javascript',
            'Cache-Control': 'max-age=200'
        });
        response.end(`console.log("script1 loaded, hhh")`);
    }

}).listen(1235, function () {
    console.log("server listening on 1235");
});