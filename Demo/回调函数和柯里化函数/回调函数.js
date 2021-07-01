// forEach: 用来遍历数组中的每一项
// 1)数组中有几项，我们传递进去的匿名回调函数就需要执行几次
// 2）每一次执行匿名函数的时候，还给其传递了三个参数值：数组中的当前项item，当前项的索引index，原始的数组input
// 3）理论上forEach是没有返回值的，仅仅是遍历数组中的每一项，不对原来的数组进行修改，但是我们可以自己通过数组的索引来修改原理的数组。

var arr = [1,2,3,4,5];
var res = arr.forEach(function (item, index, input) {
    // console.log(arguments);
    //input[index] = item*10; // 改变了原数组
   // console.log(this);
});
console.log(res);   // =>undefined

// map：和forEach非常相似，都是用来遍历数组中的每一项值的
// 1) map回调函数中支持return返回值，return的是啥，相当于把数组中的这一项改变为啥（但是并不影响原来的数组，只是相当于把原数组克隆一份，把克隆的这一份数组中的对应项改变了）

var res = arr.map(function (item, index, input) {
    //console.log(this);
    return item*10;
});
console.log(res, arr);

// forEach方法中的this是arr，匿名回调函数中的this默认是window
/*
var obj = {name: 'aaa'};
arr.forEach(function (item, index) {
    // console.log(this);
}.call(obj));   // 给forEach赋值的时候，首先把匿名函数执行，把匿名函数中的this变为obj，把匿名函数执行的返回结果undefined赋值给forEach（不行）
*/
/*var obj = {name: 'aaa'};
arr.forEach(function (item, index) {
     console.log(this);
}.bind(obj));*/

// 1、不管是map还是forEach都支持第二个参数值，第二个参数的意思是把匿名回调函数中的this进行修改
var obj = {name: 'aaa'};
arr.forEach(function (item, index) {
    console.log(this);
}, obj);

// 1、不管是map还是forEach都在IE6-8下不兼容
// （对象不支持"forEach"属性或方法=>在Array.prototype上没有forEach这个方法）
Array.prototype.myForEach = function myForEach(callBack, context){
    context = context || window;
    if("forEach" in Array.prototype){
        this.forEach(callBack, context);
        return ;
    }
    // IE6-8下自己编写回调执行的逻辑
    for(var i=0;i<this.length;i++){
        callBack && callBack.call(context, this[i], i, this);
    }
};

Array.prototype.myMap = function myMap(callBack, context){
    context = context || window;
    if("map" in Array.prototype){
        return this.map(callBack, context);
    }
    // IE6-8下自己编写回调执行的逻辑
    var newArr = [];
    for(var i=0;i<this.length;i++){
        if(typeof callBack === "function"){
            newArr[newArr.length]=callBack.call(context, this[i], i, this);
        }
    }
    return newArr;
};
// console.log(arr.myMap(function (item) {
//     return item * 2;
// }));