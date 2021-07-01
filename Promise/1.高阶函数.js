// 函数可以作为返回值
function judgeType(type){
    return function (obj) {
        return Object.prototype.toString.call(obj) === `[object ${type}]`;
    };
}
var isArray = judgeType("Array");
var isFunction = judgeType("Function");
var arr = [];
var fn = function () {

};
console.log(isArray(arr));
console.log(isFunction(fn));


// 函数可以作为参数传递
function eat() {
    console.log("吃完了");
}
function Start(callback, times) {
    var count = 0;
    return function () {
        if(++count === times){
            callback();
        }
    }
}
var eating = Start(eat, 3);
eating();
eating();
eating();