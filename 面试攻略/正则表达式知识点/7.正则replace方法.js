// replace：把原有的字符替换成新的字符
// 在不适用正则的情况下，每当执行一次只能替换最先找到的字符

/*var str = "aaa2017aaa2018";

str = str.replace("aaa","aaabbb");
console.log(str);   //=>aaabbb2017aaa2018
str = str.replace("aaa","aaabbb");
console.log(str);   //=>aaabbbbbb2017aaa2018*/

// 多次执行也没有全部替换

// replace第一项的值是一个正则，这样的实现原理:
//  首先我们和exec捕获一样，把所有和我们正则匹配的都捕获到，然后把捕获的内容替换成我们需要替换的内容。
//  按照这个正则/aaa/g把str中所有可以匹配的都捕获到，然后统一都替换成我们的目标字符。

str = "aaa2017aaa2018";
str = str.replace(/aaa/g,"aaabbb");
console.log(str);   //=>aaabbb2017aaabbb2018

str = "aaa2017aaa2018";
str = str.replace(/aaa/g,function(){
    console.log(arguments);
    // 第一次执行匿名函数：=>[Arguments] { '0': 'aaa', '1': 0, '2': 'aaa2017aaa2018' }
    // 第二次执行匿名函数：=>[Arguments] { '0': 'aaa', '1': 7, '2': 'aaa2017aaa2018' }
    return "aaabbb";
});
console.log(str);   //=>aaabbb2017aaabbb2018
// 第二个参数换成一个函数：
// 1)匿名函数执行多少次，取决于正则能在字符串中捕获多少次=>正则捕获两次，所以我们的匿名函数也执行两次。
// 2)每一次执行匿名函数，里面传递的参数值arguments和我们自己通过exec捕获到的结果是非常类似的（即使正则有分组，我们同样可以通过arguments获取到分组捕获的内容）
// 3)return：你返回的结果是啥，就相当于把当前这一次大正则捕获的内容替换成返回的内容

str = "aaa2017aaa2018";
str = str.replace(/(\d+)/g, function () {
    console.log(arguments[0], arguments[1]);
    // arguments[0]获取大正则捕获的内容
    // arguments[1]获取正则捕获到的第一个分组的内容
    console.log(RegExp.$1);
    // RegExp.$1相当于arguments[1]，获取正则捕获到的第一个分组的内容
    return 222;
});
console.log(str);   //=>aaa222aaa222

 