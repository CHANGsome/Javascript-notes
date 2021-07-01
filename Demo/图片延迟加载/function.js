~function(){
    var list = document.getElementsByClassName("list")[0];
    var imgList = list.getElementsByTagName("img");
    // 1、加载数据
    var data = null;
    ~function () {
        var xhr = new XMLHttpRequest();
        xhr.open("get", "jsonData.txt?_"+Math.random(), false);
        xhr.onreadystatechange = function () {
            if(xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)){
                data = utils.jsonParse(xhr.responseText);
            }
        };
        xhr.send(null);
    }();

    // 2、动态绑定数据
    ~function () {
        var frg = document.createDocumentFragment();
        for(var i=0;i<data.length;i++){
            var li = document.createElement("li");
            li.className = "list-item";
            var div = `<div class="list-item-div"><img trueImg=${data[i]["img"]} alt=""></div>`;
            li.innerHTML = div;
            var article = `<article class="list-item-article"><h3>${data[i]["title"]}</h3><p>${data[i]["desc"]}</p></article>`;
            li.innerHTML += article;
            frg.appendChild(li);
        }
        list.appendChild(frg);
        frg = null;
    }();

    // 3、单张图片懒加载
    function loadSingleImg(imgEle) {
        if(imgEle.isLoad){
            return;
        }
        var tempImg = new Image;
        tempImg.src = imgEle.attributes[0]['nodeValue'];    // 不知道为啥，这里的imgEle没有getAttribute属性，所以trueImg这个自定义属性只能通过attributes[0]获取。
        // 图片地址错误的时候，为了避免把错误的地址赋值给当前图片的src，我们创建一个临时图片，把当前图片的trueImg属性赋值给临时图片的src，如果临时图片能正常加载，说明当前地址是有效的。
        tempImg.onload = function () {  //onload方法能执行说明当前图片的src是有效的地址
            imgEle.src = this.src;
            imgEle.style.display = "block";
            imgEle.isLoad = true;
            tempImg = null;
        }
    }

    // 4、多张图片懒加载
    function loadImgs(){
        for(var i=0;i<imgList.length;i++){
            if(imgList[i].isLoad){
                continue
            }
            var curImgParent = imgList[i].parentNode;
            var parentOffsetTop = utils.offset(curImgParent).top+curImgParent.offsetHeight;
            var windowHeight = utils.getWin("clientHeight")+utils.getWin("scrollTop");
            if(parentOffsetTop<=windowHeight){
                loadSingleImg(imgList[i]);
                fadeIn(imgList[i])
            }
        }
    }
    setTimeout(loadImgs, 500);
    window.onscroll = loadImgs;

    function fadeIn(curImg){ //淡入
        var duration = 1000; //这么长的时间间隔完成淡入效果
        var target = 1; //淡入效果变化的透明度区间，从0运动到1
        var interval = 10; //执行定时器的时间间隔
        var step = (target/duration)*interval; //每一次执行定时器需要加上的步长
        var timer = window.setInterval(function (){
            if(curOpacity >= target){ //说明已经运动到了终点，停止定时器
                window.clearInterval(timer);
                //赋值终点的动作 把target的值赋值给当前元素的样式
                return;
            }
            var curOpacity = utils.getCss(curImg,'opacity'); //赋值之前需要先获取，因为要在当前的基础上去累加步长
            curOpacity += step;

            curImg.style.opacity = curOpacity; //把已经累加好的重新赋值给样式这样才能有每次淡入一点的效果
            curImg.style.filter = 'alpha(opacity='+ curOpacity*100+ ')'; //兼容问题的处理

        },interval);

    }


}();