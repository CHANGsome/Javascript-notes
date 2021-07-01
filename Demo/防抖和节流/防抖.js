/*防抖：就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间
*  总之就是说：如果你一直点，这个事件绑定的函数就不执行，等你停止点了之后，过一秒执行，只执行一次。
* */
var box = document.getElementById("box");
function debounce(fn, wait){
    var timeout = null;
    var count = 1;
    return function () {
        var context = this;
        if(timeout!==null){
            clearTimeout(timeout);
        }
        timeout = setTimeout(()=>{
            fn.call(context, count++);
        }, wait);
    }
}
function fn(num) {
    box.innerHTML = num;
}
box.onclick = debounce(fn, 1000);