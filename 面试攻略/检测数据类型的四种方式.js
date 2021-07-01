function typeofDemo() {
    /*-------------------------------------------------------
    1、typeof 用来检测数据额类型的运算符。
    使用typeof检测数据类型，首先返回的都是一个字符串，其次字符串中包含了对应的数据类型。
    "number"、"string"、“boolean"、"undefined"、"function"、"object"
    --------------------*/
    console.log(typeof 12);   //=>number
    function fn1(num) {
        /*if(typeof num === "undefined"){
            num = 0;
        }*/
        num = num || 0;
        console.log(num);
    }
    //fn1(false);
    function fn2(callback) {
        //typeof callback === "function" ? callback() : null;
        callback && callback();
    }
    /*fn2(function () {
        console.log("callback");
    });*/
    //fn2(2);

    /*---------------------------------------------
    局限性：
    （1）typeof null => "object"
    （2）不能具体细分是数组还是正则，还是对象中其他的类型，因为使用typeof检测数据类型，对于所有的对象数据类型，最后返回的结果都是"object"
     ---------------------------*/
    console.log(typeof null);   //=>object
    console.log(typeof []);   //=>object
    console.log(typeof {});   //=>object

}
//typeofDemo();



function instanceofDemo() {
    /*-----------------------
    2、instanceof 检测某一个实例是否属于某个类。
    -----------------------*/
    var obj = [12, 13];
    console.log(obj instanceof Array);  //=>true
    console.log(obj instanceof RegExp); //=>false

    /*-----------------------------
    局限性：
    （1）不能用来检测和处理字面量方式创建出来的基本数据类型值。1 instanceof Number => false
      =>对于基本数据类型来说，字面量方式创建出来的结果和实例方式创建出来的
        结果有一定的区别，从严格意义上来讲，只有实例创建出来的结果才是标准
        的对象数据类型值，也是标准的Number这个类的一个实例；对于字面量方式
        创建出来的结果是基本数据类型值，不是严谨的实例，但是由于JS的松散特点，
        导致了可以使用Numer.prototype上提供的方法。
     (2) instanceof的特性：只要在当前实例的原型链上，instanceof的结果就是true
        在类的原型继承中，通过instanceof检测到的结果未必准确。
     --------------------------*/
    function demo() {
        console.log(1 instanceof Number);   //=>false
        console.log("hello" instanceof String);   //=>false
        console.log(null instanceof Object);   //=>false
        console.log(true instanceof Boolean);   //=>false

        console.log([] instanceof Array);   //=>true
        console.log([] instanceof Object);   //=>true
        function fn1() {

        }
        console.log(fn1 instanceof Function);   //=>true
        console.log(fn1 instanceof Object);   //=>true
    }
    //demo();

    function Fn() {

    }
    Fn.prototype = new Array();
    var f = new Fn;
    console.dir(f);
    console.log(f instanceof Fn);    //=>true
    console.log(f instanceof Array);    //=>true
}
//instanceofDemo();

function constructorDemo(){
    /*-----------------------
    3、constructor 构造函数。作用和instanceof很相似。
    ---------------------------*/
    var obj = [];
    console.log(obj.constructor === Array); //=>true

    // 但是constructor可以检测基本数据类型的值。
    var num = 1;
    console.log(num.constructor === Number);    //=>true

    // constructor和instanceof不一样，当第一次通过__proto__找到了constructor，就不会沿着原型链往上查找了
    var reg = /^$/;
    console.log(reg.constructor === RegExp);   //=>true
    console.log(reg.constructor === Object);   //=>false

    /*
    局限性：我们可以把类的原型进行重写，在重写的过程中很有可能把之前的constructor给覆盖了，这样检测出来的结果不准确
     */
    function Fn() {

    }
    Fn.prototype = new Array();
    var f = new Fn;
    console.log(f.constructor === Fn);    //=>false
    console.log(f.constructor);    //=>[Function: Array]
    console.log(f.constructor === Array);    //=>true
}
//constructorDemo();


/*
   对于特殊的数据类型null和undefined，他们所属的类是Null和Undefined，
   但是浏览器把这两个类保护起来了，不允许我们在外面访问使用
   console.log(null.toString());
   console.log(undefined.toString());
   运行上面两行代码会报错TypeError: Cannot read property 'toString' of null

 */

/*-------------------------------
 4、Object.prototype.toString.call() 最准确最常用的方法。
 还可以写成({}).toString.call()
 首先获取Object原型上的toString方法，让方法执行，并且改变方法中的this关键字的指向。
 Object.prototype.toString的作用是返回当前方法的执行主体（方法中的this）所属类的详细信息。


 toString的理解：
 乍一看应该是转化为字符串，但是某些toString方法不仅仅是转换为字符串
 对于Number、String、Boolean、Array、RegExp、Date、Function原型上的toString
 方法都是把当前的数据类型转换为字符串的类型（它们的作用仅仅是用来转换为字符串的）
 但是Object.prototype.toString并不是用来转换为字符串的
 ({name:"aaa"}).toString() => "[object Object]"
 Math.toString() => "[object Math]"
 -------------- */

// Number.prototype.toString()
console.log((1).toString());    //=>"1", 使用了Number.prototype.toString方法
console.log((128).toString(8)); //=>200, 转换为8进制

console.log((1).__proto__.__proto__.toString());    //=>[object Object]，使用了Object.prototype.toString方法
console.log(({name:"aaa"}).toString()); //=>[object Object]
console.log(Math.toString());   //=>[object Math]

var obj = {name: "aaa"};
console.log(typeof obj.toString()); //=>string
console.log(obj.toString());    //=>[object Object]
// toString 中的this是obj，返回的是obj所属类的信息“[object Object]”
// 第一个object代表当前实例是对象数据类型的（这个是固定死的）
// 第二个Object代表的是obj所属的类是Object
console.log(Object.prototype.toString.call(obj) === '[object Object]'); //=>true


console.log(Object.prototype.toString.call(1)); //=>[object Number]
console.log(Object.prototype.toString.call(null));  //=>[object Null]
console.log(Object.prototype.toString.call(undefined));  //=>[object Undefined]
console.log(Object.prototype.toString.call(true));  //=>[object Boolean]


