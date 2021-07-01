// 正则捕获的三种方式：正则的exec、字符串的match、字符串的replace。
// replace：将原有的字符串替换成新字符。
//          1)在不使用正则的情况下，执行一次replace只能替换最先查找到的字符串。
//          2)在replace中我们可以一次批量把所有正则匹配到的内容都替换掉-->replace是支持正则的。

/*var str = "bilibili22bilibili33";
str = str.replace(/bilibili/g, "哔哩哔哩");
console.log(str);*/

// 原理：先按照正则制定的规则，到我们的字符串中把正则匹配的内容捕获到，然后再每一次捕获到之后，都把捕获的内容替换成新的内容。
//      1)我们的正则表达式捕获到几次，对应后面的function就要执行几次。
//      2)每执行一次function，我们都可以获取捕获的内容，和我们单独用exec捕获的内容一致。
//      3)在function中，通过return返回替换的内容。（只替换大正则捕获的内容）
//   不写return，默认用undefined来进行替换
//   如果不想替换，返回捕获的内容（第一个参数content）就好。
str = "bilibili22bilibili33";
str = str.replace(/bilibili/g, function (content, index, input) {
    return "哔哩哔哩";
});

// replace案例：

/* 1、将数字替换成大写汉字
var str = "20190719";
var arr = ["零", "壹","贰","叁","肆","伍","陆","柒","捌","玖"];
str = str.replace(/\d/g, function () {
    //console.log(typeof arguments[0]);
    return arr[Number(arguments[0])];
});
console.log(str);
*/
/*



// 2、获取一个字符串中出现次数最多的字符
var str = "abbbbbbcxidianbilibiliabciii";
// 1)获取每个字符出现的次数，存储在obj中
var obj = {};
str.replace(/[a-z]/gi, function () {
    var content = arguments[0];
    if(obj[content]>=1){
        obj[content]+=1;
    }else{
        obj[content] = 1;
    }
});
// 2)获取出现次数最多的字符
var maxNum = 0;
for(var key in obj){
    obj[key]>maxNum ? maxNum = obj[key] : null;
}
// 3)把所有出现次数为maxNum的字符都找到
var arr = [];
for(var key in obj){
    obj[key] === maxNum ? arr.push(key) : null;
}
arr.forEach(function (key) {
    console.log(key+"出现次数最多，出现了"+obj[key]+"次");
});
*/


/*
// 3、模板引擎实现的初步原理
var str = "my name is {0}, my age is {1}, i come from {2}~~~";
var arr = ["Lucy", 25, "US"];
str = str.replace(/{(\d+)}/g, function () {
    return arr[Number(arguments[1])];
    //return arr[Number(RegExp.$1)];  //IE下不兼容
});
console.log(str);*/

// 4、获取url中的传参
/*var str = "https://www.baidu.com/s?wd=js%20arguments%E8%BD%AC%E6%95%B0%E7%BB%84&rsv_spt=1&rsv_iqid=0xff194bb1001ed2a7&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&rqlang=cn&tn=baiduhome_pg&rsv_enter=1&oq=js%2520test&inputT=1138&rsv_t=7385Vbu4VzXu%2BkX6yi0wG0owvY4P%2B6JSh7FhNCkb0Y9gS3vMHeFupKE7pp6nASy4qYlP&rsv_pq=d3b5d26400218079&rsv_sug3=31&rsv_sug1=31&rsv_sug7=100&bs=js%20test";

var reg = /([^?=&]+)=([^?=&]+)/g;
var obj = {};*/

// 1)使用exec
/*var res = reg.exec(str);
while (res){
    obj[res[1]] = res[2];
    res = reg.exec(str);
}
console.log(obj);*/

// 使用replace
/*str.replace(reg, function () {
    obj[arguments[1]] = arguments[2];
});
console.log(obj);*/


// 思考题：
// 1、"2019-9-22 13:10:0" --> "2015年09月22日 13时10分00秒“
function formatTime() {
    var str = "2019-9-22 13:10:00";
    var reg = /\d+/g;
    var data = [];

// 第一步：获取数字
    /*str.replace(reg, function () {
        data.push(arguments[0]);
    });*/

    reg = /(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})/;
    str.replace(reg, function () {
        var arr = [].slice.call(arguments);
        data = arr.slice(1,7);
    });
    console.log(data);

// 第二步：放入模板字符串中
    str = "{0}年{1}月{2}日 {3}时{4}分{5}秒";
    reg = /{(\d+)}/g;
    str = str.replace(reg, function () {
        var num = data[arguments[1]];
        if(num.length === 1){
            num = '0'+num;
        }
        return num;
    });
    console.log(str);
}
//formatTime();

// 2、把一个字符串中所有单词的首字母大写 “wo hao kuai le a" --> "Wo Hao Kuai Le A"
function initialsUpperCase() {
    var str = "wo hao kuai le a";
    var reg = /[a-zA-Z]+/g;
    str = str.replace(reg, function () {
        var word = arguments[0];
        return word.slice(0,1).toUpperCase().concat(word.slice(1,word.length));
    });
    console.log(str);
}
initialsUpperCase();