var reg1 = /^\d+abc\d+$/;
console.log(reg1.test("111abc093"));    //=>true

var name = 'abc';
var reg2 = new RegExp("^\\d+"+name+"\\d+$");
console.log(reg2.test("111abc093"));   //=>true

// 字面量方式和实例创建的方式在正则中的区别？
// 1）字面量方式中出现的一切都是元字符，所以不能进行变量值的拼接，而实例创建的方式可以
// 2）字面量方式中直接写\d就可以，而在实例中需要把它转成\\d
// 3）实例不需要把正则表达式的字符串放在/ /中间
