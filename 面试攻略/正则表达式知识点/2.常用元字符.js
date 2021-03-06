var reg = /\d/;
//console.log(reg.test("aa2019"));    //=>true
reg = /^\d$/;
//console.log(reg.test("9"));    //=>true
//console.log(reg.test("911"));    //=>false

// 元字符：每一个正则表达式都是由元字符和修饰符组成的
// 【元字符】：在/ /之间具有意义的一些字符
// 1、具有特殊意义的元字符
//      \: 转义字符，转义后面字符所代表的含义
//      ^: 以某一个元字符开始
//      $: 以某一个元字符结尾
//      \n: 匹配一个换行符
//      .: 除了\n以外的任意字符
//      (): 分组，把一个大正则本身划分成几个小的正则

reg = /^(\d+)abc(\d+)$/;
//console.log(reg.test("12abc999"));  //true

// 2、代表出现次数的量词元字符
//      *: 出现0到多次
//      +: 出现1到多次
//      ?: 出现0次或者1次
//      {n}: 出现n次
//      {n,}: 出现n到多次
//      {n,m}: 出现n到m次

reg = /^\d+$/;
//console.log(reg.test("2019"));  //=>true
// 一个简单的验证手机号的正则：11位数字，第一位是1
reg = /^1\d{10}$/;

// 3、常用的元字符
//      x|y: x或者y中的一个
//      [xyz]: x或者y或者z中的一个
//      [^xyz]: 除了xyz三个以外的任何一 个字符
//      [a-z]: a-z之间的任何一个字符
//      [^a-z]: 除了a-z之间的任何一个字符
//      \d: 一个0-9之间的数字
//      \D: 除了0-9之间的数字以外的任何字符
//      \b: 匹配一个边界符
//      \w: 数字、字母、下划线中的任意一个字符，等价于[0-9a-zA-Z_]
//      \s: 匹配一个空白字符，包括空格、制表符、换页符...

reg = /^0.2$/; //以0开头，以2结尾，中间可以是除了\n以外的任意字符
//console.log(reg.test('0.2'));   //=>true
//console.log(reg.test('0-2'));   //=>true
reg = /^0\.2$/;
//console.log(reg.test('0.2'));   //=>true
//console.log(reg.test('0-2'));   //=>false

reg = /\D/;
console.log(reg.test('12abc999')); //=>true
console.log(reg.test('12999')); //=>false
