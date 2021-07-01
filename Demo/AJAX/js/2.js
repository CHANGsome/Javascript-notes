/*let xhr = new XMLHttpRequest();
xhr.open('get', 'temp.json', false);
xhr.onreadystatechange = ()=>{
    console.log(xhr.readyState);    // 只输出一次，结果是4
}
xhr.send()*/

/*
let xhr = new XMLHttpRequest();
xhr.open('get', 'temp.json', false);
xhr.send();
// 【同步】开始发送AJAX请求，开启AJAX任务，在任务没有完成之前，什么时都做不了（下面绑定事件也坐不了）
// LOADING => 当readyState === 4的时候AJAX任务完成，开始执行下面的操作
// readyState===4


// 绑定方法之前状态已经为4了，此时AJAX的状态不会变成其他值了，
// 所以onreadystatechange事件永远不会被触发，一次都没执行方法
// 使用AJAX同步编程，不要把SEND放在事件监听前，这样我们无法在绑定的方法中获取到响应主体内容
*/




let xhr = new XMLHttpRequest();
// xhr.readyState===0
xhr.onreadystatechange = ()=>{
    console.log(xhr.readyState);
}
xhr.open('get', 'temp.json',false);
// xhr.readyState===1
// AJAX特殊处理的一件事：执行OPEN状态会变为1，会主动把之前监听的方法执行一次，然后再去执行send
xhr.send();
// xhr.readyState===4

// 输出 1 4











