var fs = require("fs");
var url = require("url");
var http = require("http");

var server = http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true);
    var pathname = urlObj['pathname'];
    var query = urlObj['query'];

    // 处理静态资源文件的请求（HTML/CSS/JS...) => 前端路由
    // var reg = /\.(HTML|JS|CSS|JSON|TXT|ICO|JPG|GIF|PNG|BMP)$/i;
    var reg = /\.(HTML|JS|CSS|JSON|TXT)$/i;
    if(reg.test(pathname)){
        // 获取请求文件的后缀名
        var suffix = reg.exec(pathname)[1].toUpperCase();
        // 根据请求文件的后缀名获取当前文件的MIME类型
        var suffixMIME = "text/plain";
        switch (suffix){
            case "HTML":
                suffixMIME = "text/html";
                break;
            case "CSS":
                suffixMIME = "text/css";
                break;
            case "JS":
                suffixMIME = "text/javascript";
                break;
            case "JSON":
                suffixMIME = "application/json";
                break;
        }
    }


    // 如果客户端请求的资源文件不存在，我们不加try catch服务会终止，这样不好，所以我们添加try catch捕获异常信息，这样即使不存在，服务也不会报错，同样也不会终止。
    try{
        // 读取文件内容或者代码（读取出来的内容都是字符串格式的）
        var conFile = fs.readFileSync("."+pathname, "utf-8");

        // 重写响应头信息：告诉客户端的浏览器我返回的内容是什么样的MIME类型，并且制定返回的内容格式是utf-8编码的，返回的中文汉字就不会出现乱码了。
        res.writeHead(200, {"content-type": suffixMIME+";charset=utf-8"})

        // 服务器向客户端返回的内容应该也是字符串
        res.end(conFile);
    }catch (e){
        res.writeHead(404, {'content-type': 'text/plain;charset=utf-8'});
        res.end("file is not found");
    }
});

server.listen(1234, function () {
    console.log("server is created successfully, listening on 1234 port!");
})