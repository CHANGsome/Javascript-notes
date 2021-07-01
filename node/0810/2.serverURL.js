var url = require('url');
var str = "http://10.170.16.131:80/index.html?name=aaa&age=2";
console.log(url.parse(str));
/*
Url {
    protocol: 'http:',  // 传输协议
    slashes: true,
    auth: null,
    host: '10.170.16.131:80',  // 域名+端口号
    port: '80,  // 端口号
    hostname: '10.170.16.131',  域名（IP）
    hash: null, // 哈希值
    search: '?name=aaa&age=2',  // 问好+传递进来的数据
    query: 'name=aaa&age=2',
    pathname: '/index.html',    // 请求文件的路径及名称
    path: '/index.html?name=aaa&age=2',
    href: 'http://10.170.16.131/index.html?name=aaa&age=2'
 }*/

console.log(url.parse(str,true));
/*Url {
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: '10.170.16.131:80',
    port: '80',
    hostname: '10.170.16.131',
    hash: null,
    search: '?name=aaa&age=2',
    query: [Object: null prototype] { name: 'aaa', age: '2' },  // 加了参数true，这个属性会变成对象
    pathname: '/index.html',
    path: '/index.html?name=aaa&age=2',
    href: 'http://10.170.16.131:80/index.html?name=aaa&age=2' }*/
