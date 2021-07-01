~function () {
    let box = document.querySelector("#box");
    let targetTime = new Date('2019/7/18 14:55:00').getTime();
    let serverTime = null;
    let formatTime = (value)=>{
        if(value<=0){
            return '00';
        }else if(value>0 && value<10){
            return '0'+value;
        }else{
            return value;
        }
    };
    let fn = ()=>{
        // 1、计算当前时间和目标时间的差值
        // new Date();获取的是客户端本机时间（会受到客户端自己调整时间的影响），重要的时间参考不能基于这个完成，不管是哪一个客户端都需要基于相同的服务器时间计算

        let nowTime = serverTime;
        let spanTime = targetTime - nowTime;
        if(spanTime < 0){
            box.innerHTML = "开抢啦！！";
            clearInterval(autoTimer);
            return;
        }

        // 2、计算差值包含多少时分秒
        let hours = Math.floor(spanTime/(1000*60*60));
        spanTime = spanTime - hours*3600000;
        let minutes = Math.floor(spanTime/60000);
        spanTime = spanTime - minutes*60000;
        let seconds = Math.floor(spanTime/1000);

        hours = formatTime(hours);
        minutes = formatTime(minutes);
        seconds = formatTime(seconds);

        box.innerHTML = "距离抢购还剩 "+hours+" : "+minutes+" : "+seconds;
        serverTime += 1000;
    }
    let getServerTime = ()=>{
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = ()=>{
            if(!/^(2|3)\d{2}$/.test(xhr.status)) return;
            if(xhr.readyState === 2){
                serverTime = new Date(xhr.getResponseHeader("date")).getTime();
            }
        }
        xhr.open('head','temp.xml',true);
        xhr.send(null);
    };
    getServerTime();
    let autoTimer = setInterval(fn, 1000);
}();