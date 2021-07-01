// 正则分组：
// 1、改变优先级
// 2、分组引用
//      \2：代表和第二个分组出现一模一样的内容。
//      \1：代表和第一个分组出现一模一样的内容。

var reg = /^(\w)\1(\w)\2$/;
console.log(reg.test("zzff"));  //=>true
console.log(reg.test("z0fr"));  //=>false

// 3、分组捕获：
// 正则在捕获的时候，不仅仅把大正则匹配的内容捕获到，而且还可以把小分组匹配的内容捕获到
// (?:)：在分组中?:的意思是只匹配不捕获
reg = /^(\d{2})(\d{4})(\d{4})(\d{2})(\d{2})(?:\d{2})(\d)(\d|X)$/;
var str = "431281199503072823";
//console.log(reg.exec(str));
/*
[ '431281199503072823', //=>大正则匹配的内容
  '43', //=>第一个分组捕获的内容
  '1281',  //=>第二个分组捕获的内容
  '1995',   // ...
  '03',
  '07',
  '2',
  '3',
  index: 0,
  input: '431281199503072823',
  groups: undefined ]
*/

//console.log(str.match(reg));    //=>和exec捕获的结果一样

reg = /aaa(\d+)(xyz)/g;
str = "aaa333xyzaaa444xyzaaa555xyz";
// 用exec执行三次，每次不仅仅可以把大正则匹配的内容捕获到，而且还可以捕获到分组匹配的内容
console.log(reg.exec(str));
/*
 [ 'aaa333xyz',
  '333',
  'xyz',
  index: 0,
  input: 'aaa333xyzaaa444xyzaaa555xyz',
  groups: undefined ]
  */
console.log(reg.exec(str));
console.log(reg.exec(str));

// 而match只能捕获大正则匹配的内容
console.log(str.match(reg));    //=>[ 'aaa333xyz', 'aaa444xyz', 'aaa555xyz' ]