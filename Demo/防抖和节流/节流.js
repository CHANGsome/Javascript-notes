/*节流：所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。*/
var box = document.getElementById("box");
function throttle(fn, wait) {
    let timeout = null;
    let count = 1;
    return function () {
        let context = this;
        if(timeout===null){
            timeout = setTimeout(()=>{
                timeout = null;
                fn.call(context, count++);
            }, 1000);
        }
    };
}
function fn(num) {
    box.innerHTML = num;
}
box.onclick = throttle(fn, 1000);