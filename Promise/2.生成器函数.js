/*
* 生成器是一个函数，可以用来生成迭代器
* 生成器函数和普通函数不一样，普通函数是一旦调用就会执行完
* 但是生成器函数中间可以暂停，可以执行一会歇一会
* */
// 生成器函数有一个特点，需要加个*
// 生成器有若干个阶段，如何划分这些阶段？

function *go(a){
    console.log(1);
    // 此处的b用来供外界输入进来的
    // 这一行实现输入和输出，本次的输出放在yield后面，下次的输入放在yield前面
    let b = yield a;
    console.log(a,b);
    console.log(2);
    let c = yield b;
    console.log(c);
    console.log(3);
    return c;
}

// 生成器和普通函数不一样，调用它函数并不会立刻执行
// 它会返回生成器的迭代器，迭代器是一个对象，每调用一次next就可以返回一个值对象
let it = go('aaa');
// next第一次执行不需要传参，传参没有意义。
let r1 = it.next();
// 第一次调用next会返回一个对象，此对象有两个属性，一个是value，就是yield后面那个值，一个done表示是否迭代完成。
console.log(r1);    // { value: 'a', done: false }
let r2 = it.next("bbb");
console.log(r2);  //{ value: 'bbb', done: false }
let r3 = it.next("ccc");
console.log(r3);// { value: 'ccc', done: true }