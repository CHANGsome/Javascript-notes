Function.prototype.my_call = function (context) {
    // my_call方法中的this就是当前我要操作和改变其this关键字的那个函数名（fn）
    // 1、让fn中的this关键字变为context的值，即让this这个函数中的this关键字变为context
    eval(this.toString().replace("this","obj"));

    // 2、让fn执行
    this();
};
var obj = {"name": "obj"};
function fn() {
    console.log(this);
}
fn.my_call(obj);