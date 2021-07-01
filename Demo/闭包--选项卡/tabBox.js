var tabBox = document.querySelector("#tabBox");
var tabs = tabBox.querySelector(".tab").querySelectorAll("li");
var boxes = tabBox.querySelector(".box").querySelectorAll("div");

var changeTab = function (index) {
    console.log(index);
    for(let i=0;i<tabs.length;i++){
        tabs[i].className = "";
        boxes[i].className = "";
    }
    tabs[index].className = 'selected';
    boxes[index].className = 'selected';
};

~(function () {
    for(var i=0;i<tabs.length;i++){
        ~(function(i){ //形成不被销毁的私有作用域，保存每次循环i的值
            tabs[i].onclick =  function(){
                changeTab(i);
            };
        })(i);
    }
})();