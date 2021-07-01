// 1、正则；它就是一个规则，用来处理字符串的一个规则（正则就是用来处理字符串）
// 处理：
// 1）判断一个字符串是否符合我们制定的规则=>reg.test(str);
var reg = /\d/;
console.log(reg.test("aaa"));   //=>false
console.log(reg.test("a21"));   //=>true

// 2）把字符串中符合我们正则规则的内容捕获到=>reg.exec(str);
console.log(reg.exec("aaa"));   //=>null
console.log(reg.exec("a21"));   //=>[ '2', index: 1, input: 'a11', groups: undefined ]


// 2、如何创建一个正则？
// 1）字面量方式
var reg1 = /\d/;

// 2）实例创建方式
var reg2 = new RegExp("\\d");
console.log(reg2.test("a21"));  //=>true

// 正则的两种创建方式是有区别的
