// exec：正则的捕获
// 每一次捕获的时候都是先进行默认的匹配，如果没有匹配成功，捕获的结果是null；
// 只有有匹配的内容，我们才能捕获到。

// 1、捕获的内容格式：捕获到的内容是一个数组
//      数组中的第一项是当前大正则捕获的内容
//      index: 捕获内容在字符串中开始的索引位置
//      input：捕获的原始字符串

// 2、正则捕获的特点：
//  1) 懒惰性：每一次执行exec只捕获第一个匹配的内容，在不进行任何处理的情况下，再执行多次捕获，捕获的还是第一个匹配的内容。
// lastIndex: 是正则每一次捕获在字符串中开始查找的位置，默认的值是0

var reg = /\d+/;
var str = "aabd223daadof99";

console.log(reg.lastIndex); //=>0
var res = reg.exec(str);
console.log(res);   // =>[ '223', index: 4, input: 'aabd223daadof99', groups: undefined ]

// 我们第二次通过exec捕获的内容还是第一个'223'
console.log(reg.lastIndex); //=>0
res = reg.exec(str);
console.log(res);   // =>[ '223', index: 4, input: 'aabd223daadof99', groups: undefined ]

//  2) 如何解决懒惰性？在正则的末尾加一个修饰符"g".
// 修饰符：g、i、m
// global(g)：全局匹配
// ignoreCase(i): 忽略大小写匹配
// multiline(m): 多行匹配

// 原理：加了全局修饰符g，正则每一次捕获结束后，我们的lastIndex的值都变为了最新的值，下次捕获从最新的位置查找，这样就可以把所有需要捕获的值都捕获到了

/*
reg = /\d+/g;
console.log(reg.lastIndex); //=>0
res = reg.exec(str);
console.log(res);   //=>[ '223', index: 4, input: 'aabd223daadof99', groups: undefined ]

console.log(reg.lastIndex); //=>7
res = reg.exec(str);
console.log(res);   //=>[ '99', index: 13, input: 'aabd223daadof99', groups: undefined ]

console.log(reg.lastIndex); //=>15
res = reg.exec(str);
console.log(res); //=>null
*/

// 3) 获取正则捕获的所有内容（一定不要忘记加g）
/*var arr = [];
str = "aabd223daadof99";
reg = /\d+/g;
res = reg.exec(str);
while(res){
    arr.push(res[0]);
    res = reg.exec(str);
}
console.log(arr);   //=>[ '223', '99' ]*/

// 4) 贪婪性：正则的每一次捕获都是按照匹配最长的结果捕获的，例如：2符合，223也符合，而我们默认捕获的是223
// 如何解决贪婪性：在量词元字符后面添加一个"?"即可
// ?问号在正则中有很多作用：
// 放在一个普通元字符后面代表出现0-1次；
// 放在一个量词的元字符后面是取消捕获时候的贪婪性。

/*
var arr = [];
str = "aabd223daadof99";
reg = /\d+?/g;   //=>出现1到多个0-9之间的数字
res = reg.exec(str);
console.log(res);
while(res){
    arr.push(res[0]);
    res = reg.exec(str);
}
console.log(arr);   //=>[ '2', '2', '3', '9', '9' ]
*/

// 3、字符串中的match方法：把所有和正则匹配的字符都获取到

str = "aabd223daadof99";
reg = /\d+?/g;
var arr = str.match(reg);
console.log(arr);   //=>[ '2', '2', '3', '9', '9' ]

reg = /\d+/g;
arr = str.match(reg);
console.log(arr);   //=>[ '223', '99' ]

reg = /\d+/;
arr = str.match(reg);
console.log(arr);   //=>[ '223', index: 4, input: 'aabd223daadof99', groups: undefined ]

// 虽然在当前的情况下，match比exec更加地简便，但是match有一些处理不了的情况：
// 在分组捕获的情况下，match只能捕获到大正则匹配的内容，而对于小正则捕获的内容是无法获取的。