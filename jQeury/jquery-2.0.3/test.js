
// alert(1);
// var box = document.getElementById("box");
// console.log(box);
// console.log($("#box"));
//alert($("#box")[0].style.backgroundColor);

// function A() {
//     console.log("AAA");
// }
// var a = new A();
// console.log(a.constructor());
//
// var i = -1;
// console.log(+i);

// console.log($(document).extend === $.prototype.extend);


function runAsync(){
    var p = new Promise(function(resolve, reject){

        setTimeout(function(){
            console.log('执行完成');
            resolve('异步请求成功之后返回的数据');
        }, 1000);
    });
    return p;
}

runAsync().then(function(data){
    console.log(data);
});