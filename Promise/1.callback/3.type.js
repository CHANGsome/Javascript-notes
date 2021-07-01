// 判断数据类型

// typeof instanceof constructor Object.prototype.toString.call

function isType(content,type){
  return Object.prototype.toString.call(content) == '[object ${type}]';
}

let types = ['String', 'Boolean', 'Number', 'Null', 'Undefined'];
let utils = {

}

var type = 'string';
console.log(`[object ${type}]`);
console.log(Object.prototype.toString.call([]));
Object.prototype.toString.call([].toString());