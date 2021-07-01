(function (window, undefined) {

    // 直接在自执行函数里面用window也可以获取到，为什么要作为形参传进来？两个原因：
    // 1、全局对象window属于最顶层，在私有作用域中找不到变量window才会慢慢向上查找到全局对象。
    // 而如果作为形参传入，就相当于在自执行函数的私有作用域中了。查找速度快。
    // 2、方便压缩。压缩的时候，形参变量名可以不是window，是w。

    // undefined, 不传参，然变量undefined的值一直为undefined。
    // 因为undefined不是关键字也不是保留字，所以可以作为变量名。有些浏览器是可以修改undefined的值的，比如IE6中:
    // var undefined = 10;
    // console.log(undefined); // =>10

    var jQuery = function () {
        return new jQuery.prototype.init();
    };

    // (96, 283) => 在jQuery原型上定义了一些变量和函数
    jQuery.fn = jQuery.prototype = {
        constructor: jQuery,

        // $(selector, context)
        // jQuery函数的第一个参数selector，有三种情况：
        // 1、标签“<li></li>” 、“<li></li><li></li>”，这样会创建一个jQuery对象
        // 2、选择器“#div"、”#div .left"，这样会定位到相应的元素
        // 3、函数function，如果是一个函数，会将该函数放在document.ready里。
        selector: '',
        context: '',

        length: 0,

        init: function (selector, context) {
            // 1、$("<li>")=>创建对象

            // 2、$("#box")=>定位到id为box的元素

            // 3、$(function(){})=>在document.ready时执行该函数
        },

        toArray: function () {
            return [].slice.call(this);
        },
        get: function () {  // 转原生集合

        },
        pushStack: function () {    // jQuery对象的入栈

        },
        each: function(){

        },
        ready: function () {

        },
        slice: function () {
            
        }, 
        first: function () {
            
        },
        last: function () {
            
        },
        eq: function () {   // eq和get的区别，get没有入栈，eq是入栈操作
            
        },
        map: function () {

        },
        end: function () {

        },
        push: [].push,
        sort: [].sort,
        splice: [].splice
    }

    jQuery.fn.init.prototype = jQuery.fn;

    // (285, 347) => jQuery的继承方法
    jQuery.extend = jQuery.fn.extend = function () {
        // 拷贝继承，如果第一个参数为true，则为深拷贝

        // 这一段深拷贝写得太妙了！！！！
        /*
        if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
            if ( copyIsArray ) {
                copyIsArray = false;
                clone = src && jQuery.isArray(src) ? src : [];

            } else {
                clone = src && jQuery.isPlainObject(src) ? src : {};
            }

            // Never move original objects, clone them
            target[ name ] = jQuery.extend( deep, clone, copy );

            // Don't bring in undefined values
        } else if ( copy !== undefined ) {
            target[ name ] = copy;
        }
        */

    }

    jQuery.extend({
        noconflict: function (deep) {   // 解决$和jQuery两个字符的冲突


        },
        isReady: false,
        readyWait: false,
        
        ready: function () {    // document.ready(), 涉及到异步，没太懂，后面再好好看一下
            
        },
        holdReady: function () { //推迟DOM触发
            
        },
        isFunction: function () {

            // 在IE中有一些兼容问题
            
        },
        isArray: Array.isArray,
        isWindow: function (obj) {
            return obj!=null && obj === obj.window;
        },
        isNumeric: function (obj) {
            return !isNaN( parseFloat(obj) ) && isFinite( obj );
        },
        type: function () {
            // 主要用了 {}.toString.call()方法
        },
        isPlainObject: function (obj) {    // 是否是Object的实例对象
            // obj.constructor.prototype === Object.prototype
            // 即obj.__proto__ === Object.prototype

        },
        isEmptyObject: function () {
            var name;
            for ( name in obj ) {
                return false;
            }
            return true;
        }

    })



})(window);