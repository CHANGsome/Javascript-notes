// 1、exec正则用来捕获的一个方法
// 在正则捕获的时候，我们加修饰符"g"，可以取消捕获时候的懒惰性
// 原理：正则中有一个lastIndex属性，它代表下一次捕获的开始索引，但是默认这个值永远是0，
//      也就是不管执行几次exec都是从头开始捕获，所以每次捕获到的都是相同的结果
//      而加了"g"修饰符，每次exec执行完成之后，我们的lastIndex的值都等于当前捕获内容的后一个索引，
//      下一次从这之后继续查找捕获，这样就可以一次次地执行，把想要的结果都捕获到了。

/*var reg = /\d+?/g;
var str = "xidian2019huiwang2018";
var arr = [];
var res = reg.exec(str);
while(res){
    arr.push(res[0]);
    res = reg.exec(str);
}
console.log(arr);   //=>[ '2', '0', '1', '9', '2', '0', '1', '8' ]
*/



// 2、match字符串用来匹配正则的一个方法
/*var reg = /\d+?/g;
var str = "xidian2019huiwang2018";  //=>[ '2', '0', '1', '9', '2', '0', '1', '8' ]
var arr = str.match(reg);
console.log(arr);*/
// match一次性把符合大正则的都存放在一个数组中，如果也需要捕获小分组中的内容，match是捕获不到的。

/*String.prototype.match = function (reg) {
    // this-->str,我们想操作的那个字符串。
    // 原型上的方法，里面的this都是我们要操作的当前实例。
    var arr = [];
    var res = reg.exec(this);
    while(res){
        arr.push(res[0]);
        res = reg.exec(this);
    }
    return arr;
}*/



// 3、分组捕获
// 在正则捕获的时候，我们添加分组，不仅仅可以把大正则匹配的内容捕获，而且还可以把小分组代表的子正则匹配的内容一起捕获出来
/*
var str = "my name is {0}, my age is {1}, i come from {2}~~~";
var arr = ["Lucy", 25, "US"];
str = str.replace(/{(\d)}/g, function () {
    return arr[Number(arguments[1])];
});
// replace的第一个参数是正则：捕获一次，replace执行一次替换的操作。每次返回啥就替换成啥。
console.log(str);*/


var str = "abc234abc333";
str = str.replace(/abc/g, function (content, index, input) {
    // arguments参数集合，这个函数默认有几个不固定的参数
    // content: 每次捕获的内容
    // 如果有分组，index前面捕获的内容应该依次有大正则捕获的，小分组捕获的。
    // index: 捕获的索引
    // input: 原始字符串
    return content.toUpperCase();
});
console.log(str);   //=>ABC234ABC333


