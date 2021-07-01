//高阶函数：函数参数如果是函数，或者函数的返回值是函数 我们就叫他高阶函数

// AOP 面向切片编程

// before函数
function say(who){
  console.log(who+"hello");
}

Function.prototype.before = function(beforeFunc){
  // this 箭头函数中没有this 也没有arguments
  return (...args)=>{
    beforeFunc();
    this(...args);
  }
}
// beforeSay 是一个包装后的函数
 let beforeSay = say.before(()=>{
  console.log('开始说话');
});
beforeSay('我');