/**
 * Created by lucky on 2016/4/19.
 */
var utils = function(){
    var flag = "getComputedStyle" in window;  // 关于IE6-8的兼容，用flag判断

    function listToArray(similarArray) {
        /*
         *   try catch js
         * */
        if(flag) {
            return Array.prototype.slice.call(similarArray);
        }
        var a = [];
        for (var i = 0; i < similarArray.length; i++) {
            a[a.length] = similarArray[i];
        }
        return a;
    }
    function jsonParse(jsonStr) {   //兼容IE6-7
        return 'JSON' in window ? JSON.parse(jsonStr) : eval("(" + jsonStr + ")");
    }
    function offset(ele) {
        var eleLeft = ele.offsetLeft;
        var eleTop = ele.offsetTop;
        var eleParent = ele.offsetParent;
        var left = null;
        var top = null;
        left += eleLeft;
        top += eleTop;
        while (eleParent) {
            //console.log(eleParent);
            /*
             *  ps: ie8中会有一个问题如果在ie8中就不加父级的边框了。因为已经加过了。
             *  判断我的当前浏览器是不是ie8   1 可以用正则 test MSIE 8.0   2 字符串
             *  中的indexOf MSIE 8.0 判断 -1. window.navigator.userAgent
             * */
            if (window.navigator.userAgent.indexOf('MSIE 8.0') !== -1) { //ie8
                left += eleParent.offsetLeft;
                top += eleParent.offsetTop;
            } else {
                left += eleParent.clientLeft + eleParent.offsetLeft;
                top += eleParent.clientTop + eleParent.offsetTop;
            }
            eleParent = eleParent.offsetParent;
        }
        return {left: left, top: top};
    }
    function getWin(attr, val) { //一个参数的时候是读取，两个参数可以赋值
        if (val !== undefined) {
            document.documentElement[attr] = val;
            document.body[attr] = val;
        }
        return document.documentElement[attr] || document.body[attr];
    }
    function getCss(curEle, attr) {

        //兼容IE6-8
        var reg = /^(-?\d+(\.\d+)?)(?:px|em|pt|deg|rem)$/;
        var val = null;
        if (!flag) {
            //这里处理filter的滤镜问题  alpha(opacity=40);
            if (attr === 'opacity') {
                //alpha(opacity=40)
                val = curEle.currentStyle['filter'];
                var reg1 = /^alpha\(opacity=(\d+(\.\d+)?)\)/;
                return reg1.test(val) ? RegExp.$1 / 100 : 1;
            }
            val = curEle.currentStyle[attr];
        } else {
            val =   attr === 'opacity' ?   window.getComputedStyle(curEle,null)[attr]/1 : window.getComputedStyle(curEle,null)[attr];
        }
        return reg.test(val) ? parseFloat(val) : val; //如果正则验证通过，寿命返回值是带单位的，那么我们就要人为去掉这个单位。否则不变
    }
    function children(curEle, tagName){    // 获取所有元素子节点，兼容所有浏览器，可以进行指定标签名的二次筛选

        // 首先获取所有的子节点（childNodes），
        // 然后在所有的子节点中把元素节点过滤出来（nodeType === 1）
        if (!flag) {
            // IE6-8下不能使用内置的children属性，自己写代码实现
            var nodeList = curEle.childNodes;
            var arr = [];
            for (var i = 0; i < nodeList.length; i++) {
                if (nodeList[i].nodeType === 1) {
                    arr[arr.length] = nodeList[i];
                }
            }
        } else {
            // 标准浏览器中，我们直接使用children即可，但是这样获取的是一个元素集合（类数组），
            // 为了和IE6-8下保持一致，我们借用数组原型上的slice，实现把类数组转换为数组。
            arr = [].slice.call(curEle.children);
        }

        // 二次筛选：返回子元素节点中所有标签名为tagName的元素节点
        if (typeof tagName === "string") {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].nodeName.toLowerCase() !== tagName) {
                    arr.splice(i, 1);
                    i--;
                }
            }
        }
        return arr;
    }
    function prev(curEle){
        // IE6-8不兼容previousElementSibling，但是previousSibling所有浏览器都兼容
        if(flag){
            return curEle.previousElementSibling;
        }
        var preSib = curEle.previousSibling;
        while(preSib && preSib.nodeType!==1){
            preSib = preSib.previousSibling;
        }
        return preSib;
    }
    function next() {
        if(flag){
            return curEle.nextElementSibling;
        }
        var nextSib = curEle.nextSibling;
        while(nextSib && nextSib.nodeType!==1){
            nextSib = nextSib.nextSibling;
        }
        return nextSib;
    }
    function prevAll(curEle) {
        var arr = [];
        var pre =  this.prev(curEle);
        while(pre){
            arr.unshift(pre);
            pre =  this.prev(pre);
        }
        return arr;
    }
    function nextAll(curEle) {
        var arr = [];
        var nex = this.next(curEle);
        while(nex){
            arr.push(nex);
            nex = this.next(nex);
        }
        return arr;
    }
    function sibling(curEle) {
        var pre = this.prev(curEle);
        var nex = this.next(curEle);
        var obj = {};
        pre ? obj["prev"] = pre : null;
        nex ? obj["next"] = nex : null;
        return obj;
    }
    function siblings(curEle) {
        return this.prevAll(curEle).concat(this.nextAll(curEle));
    }
    function index(curEle) {
        return this.prevAll(curEle).length;
    }
    function firstChild(curEle) {
        var childList = this.children(curEle);
        return childList.length>0 ? childList[0] : null;
    }
    function lastChild(curEle) {
        var childList = this.children(curEle);
        return childList.length>0 ? childList[childList.length-1] : null;
    }
    function append(newEle, container){
        container.appendChild(newEle);
    }
    function prepend(newEle, container) {
        var firstEle = this.firstChild(container);
        if(firstEle){
            container.insertBefore(newEle, firstEle);
        }else{  // 如果container中一个元素子节点都没有，就放在末尾即可
            container.appendChild(newEle);
        }

    }
    function insertBefore(newEle, oldEle){
        oldEle.parentNode.insertBefore(newEle, oldEle);
    }
    function insertAfter(newEle, oldEle) {
        // 相当于追加到oldEle弟弟元素的前面，如果弟弟不存在，则当前元素已经是最后一个了，所以添加到父容器末尾即可
        var nex = this.next(oldEle);
        if(nex){
            this.insertBefore(newEle, nex);
        }else{
            oldEle.parentNode.appendChild(newEle);
        }
    }
    function hasClass(curEle, className){

        // 先把类名字符串变为数组
        /* var classList = curEle.className.split(/ +/g );
         if(classList.indexOf(className) !== -1){
             return true;
         }
         return false;*/

        // 或者用正则匹配
        var reg  = new RegExp("(^| +)" +className+ "( +|$)");
        return reg.test(curEle.className);
    }
    function addClass(curEle, className) {
        // 为了防止className传递进来的值包含多个样式类名，我们把传递进来的类名字符串按照一到多个空格拆分成数组中的每一项
        var classArr = className.split(/ +/g);
        for(var i=0;i<classArr.length;i++){
            if(!this.hasClass(curEle, classArr[i])){
                curEle.className += " "+classArr[i];
            }
        }
    }
    function removeClass(curEle, className) {
        var classArr = className.split(/ +/g);
        for(var i=0;i<classArr.length;i++){
            if(this.hasClass(curEle, classArr[i])){
                var reg = new RegExp("(^| +)" +classArr[i]+ "( +|$)", "g");
                curEle.className = curEle.className.replace(reg, " ");
            }
        }
    }

    return {
        listToArray: listToArray,
        jsonParse: jsonParse,
        offset: offset,
        getWin: getWin,
        getCss: getCss,
        children: children,
        children: children,
        prev: prev,
        next: next,
        prevAll: prevAll,
        nextAll: nextAll,
        sibling: sibling,
        siblings: siblings,
        index: index,
        firstChild: firstChild,
        lastChild: lastChild,
        append: append,
        prepend: prepend,
        insertBefore: insertBefore,
        insertAfter: insertAfter,
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass

    }
}();
