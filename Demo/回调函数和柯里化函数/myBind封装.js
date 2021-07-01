Function.prototype.myBind = function myBind(context) {
    context = context || window;
    var outerArg = [].slice.call(arguments, 1);
    // 兼容
    if ("bind" in Function.prototype) {
        return this.bind.apply(this, [context].concat(outerArg));
    }

    // 不兼容
    var that = this;
    return function () {
        var innerArg = [].slice.call(arguments, 0);   // 获取元素绑定事件时的默认参数
        innerArg.length === 0 ? innerArg[innerArg.length] = window.event : null;
        that.apply(context, outerArg.concat(innerArg));
    }
};