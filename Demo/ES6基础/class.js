// Object.defineProperty（不属于es6）
var obj = {};
Object.defineProperty(obj, "name", {
    set(name){
        console.log(name);
    },
    get(){
        return "bbb";
    }
});
// obj.name = "aaa";
// console.log(obj.name);

// 1、class 语法糖
class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    // 静态方法：直接定义在User属性的方法，即User.getClassName
    // 静态方法的继承：子类构造函数.__proto__ = 父类构造函数;
    static getClassName(){
        return "User";
    }

    // 原型上的方法定义
    changeName(name){
        this.name = name;
    }
    changeAge(age){
        this.age = age;
    }

    // 通过Object.defineProperty定义的属性
    // Object.defineProperty(User, "info", {
    //     get(){
    //         return 'name:'+this.name+" | age:"+this.age;
    //     }
    // });
    get info(){
        return 'name:'+this.name+" | age:"+this.age;
    }
}

// 子类
class Manager extends User{
    constructor(name, age, password){
        super(name, age);
        this.password = password;

        /*需要注意几点：
        * 1、如果在派生类中指定了构造函数则必须要调用super()，不然会报错；如果不手动写constructor构造函数，则创建新的类实例时会自动调用super并传入所有参数。
        * class Child extends Parent{
        * // 不手动写constructor
        * }
        * 相当于：
        * class Child extends Parent{
        *   constructor(...args){
        *       super(...args);
        *   }
        * }
        * 2、只能在派生类的构造函数constructor中使用super()，如果在非派生类或函数中使用则会报错。
        * 3、在子类的构造函数中返回this之前要调用super(),它负责初始化this，否则报错。
        * */

    }
    // 子类继承父类的公有属性和方法不用写其余代码，这样就默认继承了

    changePassword(password){
        this.password = password;
    }

    get info(){
        var info = super.info;
        console.log(info);

        return info+'---new';
    }
}

/*var m = new Manager();
console.log(m.info);
m.changeName("aaa");
m.changeAge(22);
console.log(m.info);*/

// 立即执行的类
let user = new class User{
    constructor(name){
        this.name = name;
    }
}("aaa");
// console.log(user);

// 类不会被变量提升，因此创建类的实例应该放在定义类之后
// let p = new Person("aaa"); //报错:ReferenceError: Person is not defined
/*
class Person{
    constructor(name){
        this.name = name;
    }
}
let p = new Person("aaa");
console.log(p);

class Children extends Person{

}
let c = new Children("child");  // Children { name: 'child' }
console.log(c);*/
