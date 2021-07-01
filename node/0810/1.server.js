var http = require('http');
var fs = require('fs');
var url = require('url');   // url模块中提供了一个方法url.parse()，用来解析URL地址的。

// 1、HTTP
// 创建一个服务,server就是我们创建出来的服务
var server = http.createServer(function (request, response) {
    // 当客户端向服务器端的当前服务发送一个请求（端口号是80这个服务）发送一个请求，并且当前服务已经成功接收到这个请求后，执行这个回调函数。
    //console.log('hhh');

    // request（请求）: 存放的是所有客户端的请求信息，包含客户端通过问好传参的方式传递给服务器的数据内容。
    // response（响应）: 提供了向客户端返回内容和数据的方法。

    // 客户端请求的地址：http://10.170.16.131/index.html?name=aaa&age=2
    // request.url
    //console.log(request.url); //=> /index.html?name=aaa&age=2

    var urlObj = url.parse(request.url, true);
    var pathname = urlObj.pathname;
    var query = urlObj.query;
    if(pathname === "/1.html"){
        // 根据请求的url地址（具体的是根据地址中的pathname）获取到对应资源文件中的源代码
        // fs.readFileSync([path+name],[encode])：同步读取指定文件中的内容。
        // 同步读取：文件中的内容读取不完不执行下面的操作，只有都读取出来才会执行后续的操作
        var con = fs.readFileSync("./1.html", "utf-8");
        // response（响应）：提供了向客户端返回内容和数据的方法
        // response.write: 向客户端返回内容
        // response.end: 告诉服务器响应结束了
        response.write(con);
        response.end();
    }
});
// 为这个服务监听一个端口80
server.listen(80,function () {
    // 当服务创建成功，并且端口号监听成功之后执行这个回调函数
    console.log('server is created successfully, listening on 80 port!');
});

