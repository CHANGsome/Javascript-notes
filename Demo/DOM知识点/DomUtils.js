// 下面所有的方法和jQuery中的一些方法作用一模一样

// 1、function children: 获取某一个容器中所有的元素子节点（还可以筛选出指定标签名的），兼容所有浏览器。
function children(curEle, tagName){
    // 首先获取所有的子节点（childNodes），
    // 然后在所有的子节点中把元素节点过滤出来（nodeType === 1）

    if(/MSIE (6|7|8)/i.test(navigator.userAgent)){
        // IE6-8下不能使用内置的children属性，自己写代码实现
        var nodeList = curEle.childNodes;
        var arr = [];
        for(var i=0;i<nodeList.length;i++){
            if(nodeList[i].nodeType === 1){
                arr[arr.length] = nodeList[i];
            }
        }
    }else{
        // 标准浏览器中，我们直接使用children即可，但是这样获取的是一个元素集合（类数组），
        // 为了和IE6-8下保持一致，我们借用数组原型上的slice，实现把类数组转换为数组。
        arr = [].slice.call(curEle.children);
    }

    // 二次筛选：返回子元素节点中所有标签名为tagName的元素节点
    if(typeof tagName === "string"){
        for(var i=0;i<arr.length;i++){
            if(arr[i].nodeName.toLowerCase() !== tagName){
                arr.splice(i,1);
                i--;
            }
        }
    }
    return arr;
}

// 2、getElementsByClass：通过元素类名获取获取一组元素（兼容所有浏览器），这个方法名  在jQuery中没有，但是jQuery中一部分选择器也是基于这个方法的原理。

// 3、prev：获取上一个哥哥元素节点
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
// 4、next：获取下一个弟弟元素节点
function next(curEle) {
    if(flag){
        return curEle.nextElementSibling;
    }
    var nextSib = curEle.nextSibling;
    while(nextSib && nextSib.nodeType!==1){
        nextSib = nextSib.nextSibling;
    }
    return nextSib;
}

// 5、prevAll:获取所有的哥哥元素节点
function prevAll(curEle) {
    var arr = [];
    var pre =  prev(curEle);
    while(pre){
        arr.unshift(pre);
        pre =  prev(pre);
    }
    return arr;
}
// 6、nextAll：所有的弟弟元素节点
function nextAll(curEle) {
    var arr = [];
    var nex = next(curEle);
    while(nex){
        arr.push(nex);
        nex = next(nex);
    }
    return arr;
}

// 7、sibling：获取相邻的两个元素节点
function sibling(curEle) {
    var pre = prev(curEle);
    var nex = next(curEle);
    var obj = {};
    pre ? obj["prev"] = pre : null;
    nex ? obj["next"] = nex : null;
    return obj;
}

// 8、siblings：获取所有的兄弟元素节点
function siblings(curEle) {
    return prevAll(curEle).concat(nextAll(curEle));
}

// 9、firstChild：获取第一个元素子节点（jQuery没有同名方法）
function firstChild(curEle) {
    var childList = children(curEle);
    return childList.length>0 ? childList[0] : null;
}

// 10、lastChild：获取最后一个元素子节点（jQuery没有同名方法）
function lastChild(curEle) {
    var childList = children(curEle);
    return childList.length>0 ? childList[childList.length-1] : null;
}
// 11、index：获取当前元素的索引
function index(curEle) {
    return prevAll(curEle).length;
}

// 12、prepend：和appendChild对应，增加到某一个容器的开头
// append: 增加到指定容器末尾
function prepend(newEle, container) {
    var firstEle = firstChild(container);
    if(firstEle){
        container.insertBefore(newEle, firstEle);
    }else{  // 如果container中一个元素子节点都没有，就放在末尾即可
        container.appendChild(newEle);
    }

}
function append(newEle, container){
    container.appendChild(newEle);
}
// 13、insertAfter: 和insertBefore对应，增加到容器某一个元素后面
function insertBefore(newEle, oldEle){
     oldEle.parentNode.insertBefore(newEle, oldEle);
}
function insertAfter(newEle, oldEle) {
    // 相当于追加到oldEle弟弟元素的前面，如果弟弟不存在，则当前元素已经是最后一个了，所以添加到父容器末尾即可
    var nex = next(oldEle);
    if(nex){
        insertBefore(newEle, nex);
    }else{
        oldEle.parentNode.appendChild(newEle);
    }
}
// 14、addClass：增加样式类名

// 15、removeClass: 删除样式类名

// 16、hasClass: 判断是否存在某一个样式类名
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
        if(!hasClass(curEle, classArr[i])){
            curEle.className += " "+classArr[i];
        }
    }
}
function removeClass(curEle, className) {
    var classArr = className.split(/ +/g);
    for(var i=0;i<classArr.length;i++){
        if(hasClass(curEle, classArr[i])){
            var reg = new RegExp("(^| +)" +classArr[i]+ "( +|$)", "g");
            curEle.className = curEle.className.replace(reg, " ");
        }
    }
}
/*
* jQuery中的css方法，包括以下三个：
* 17、getCss
* 18、setCss
* 19、setGroupCss
*
* */

