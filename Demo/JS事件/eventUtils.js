/*
*解决三个问题：
* 1、this问题
* 2、重复问题
* 3、顺序问题
* */

~function(){

    // 先解决this问题和重复问题
    function bind(ele, type, fn) {
        if("addEventListener" in document){
            ele.addEventListener(type, fn, false);
            return ;
        }
        if(!ele["bind"+type]){
            ele["bind"+type] = [];
        }

        var tempFn = function (e) {
            fn.call(ele, e);
        };
        tempFn.flag = fn;
        var bindArr = ele["bind"+type];
        for(var i=0;i<bindArr.length;i++){
            var cur = bindArr[i];
            if(cur.flag === fn){
                return ;
            }
        }
        bindArr.push(tempFn);
        ele.attachEvent("on"+type, tempFn);
    }
    function unbind(ele, type, fn) {
        if("removeEventListener" in document) {
            ele.removeEventListener(type, fn, false);
            return;
        }
        var bindArr = ele["bind"+type];
        if(bindArr){
            for(var i=0;i<bindArr.length;i++){
                var cur = bindArr[i];
                if(cur.flag === fn){
                    ele.detachEvent("on"+type, cur);
                    bindArr.splice(i,1);
                    return;
                }
            }
        }
    }

    // 解决顺序执行问题：自己建立一个事件池
    // 暴露到外面的接口是on和off：这是伪装事件绑定和事件移除
    function on(ele, type, fn) {
        if (!ele["event" + type]) {
            ele["event"+type] = [];
        }
        var eventArr = ele["event"+type];
        for(var i=0;i<eventArr.length;i++){
            var cur = eventArr[i];
            if(cur === fn){
                return;
            }
        }
        eventArr.push(fn);

        bind(ele, type, fire);  // 因为bind解决了this问题和重复问题，所以fire里面的this是当前元素ele，而且fire只绑定一次。
    }
    function fire(e) {
        e = e || window.e;

        // 先处理兼容
        var flag = e.target ? true : false;
        if(!flag){
            e.target = e.srcElement;
            e.pageX = e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft);
            e.pageY = e.clientY + (document.documentElement.scrollTop || document.body.scrollTop);
            e.preventDefault = function () {
                e.returnValue = false;
            };
            e.stopPropagation = function () {
                e.cancelBubble = true;
            };
        }

        // 绑定的是fire方法，所以fire中的this是当前元素
        var eventArr = this["event"+e.type];
        for(var i=0;i<eventArr.length;i++){
            var cur = eventArr[i];
            if(typeof cur === "function"){
                cur.call(this, e);
            }else {
                // 说明这一项是null，可以在这里删除
                eventArr.splice(i, 1);
                i--;
            }
        }

    }
    function off(ele, type, fn) {
        var eventArr = ele["event"+type];
        for(var i=0;i<eventArr.length;i++){
            var cur = eventArr[i];
            if(cur === fn){
                // eventArr.splice(i, 1);  // 这里改变了数组长度，在fire中运行会数组塌陷
                eventArr[i] = null;
                return ;
            }
        }
    }
    window.eventUtils =  {
        eventAdd: on,
        eventRemove: off
    };
}();
