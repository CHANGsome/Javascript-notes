~function () {
    var box = document.querySelector(".box");
    var table = box.querySelector(".box-table");
    var tabHead = table.tHead;
    var tabBody = table.tBodies[0];
    var headList = tabHead.rows[0].cells;
    var bodyContentRows = tabBody.rows;
    var data = null;

    // 1、ajax请求数据
    var getData = function () {
        var xhr = new XMLHttpRequest();
        xhr.open("get", "data.txt", false);
        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)){
                data = utils.jsonParse(xhr.responseText);
            }
        }
        xhr.send(null);
    };
    getData();


    // 2、动态绑定数据
    var bindData = function () {
        var frg = document.createDocumentFragment();
        for(var i=0;i<data.length;i++){
            var tr = document.createElement("tr");
            for(var key in data[i]){
                var td = document.createElement("td");
                if(key === "sex"){
                    td.innerHTML = data[i][key] === 1 ? '男' : '女';
                }else{
                    td.innerHTML = data[i][key];
                }
                tr.appendChild(td);
            }
            frg.appendChild(tr);
        }
        tabBody.appendChild(frg);
        frg = null;
    };
    bindData();

    // 3、隔行变色
    var changeBackground = function () {
        for(var i=0;i<bodyContentRows.length;i++){
            bodyContentRows[i].className = i%2===1 ? "even" : null;
        }
    };
    changeBackground();

    // 4、点击表头实现排序
    var tabSort = function () {
        var index = this.index;
        var flag = this.flag;
        var arr = utils.listToArray(bodyContentRows);
        this.flag *= -1;
        for(var i=0;i<headList.length;i++){
            if(headList[i].flag && headList[i] != this){
                headList[i].flag  = 1;
            }
        }
        arr.sort(function (a, b) {
            var preNum = parseFloat(a.cells[index].innerHTML);
            var nextNum = parseFloat(b.cells[index].innerHTML);
            if(isNaN(preNum) || isNaN(nextNum)){
                return a.cells[index].innerHTML.localeCompare(b.cells[index].innerHTML)*flag;
            }else{
                return (preNum-nextNum)*flag;
            }
        });

        var frg = document.createDocumentFragment();
        arr.forEach(function(val){
            frg.appendChild(val);
        });
        tabBody.appendChild(frg);
        frg = null;
    };

    var bindEvent = function () {
        for(var i=0;i<headList.length;i++){
            if(headList[i].className === "cursor"){
                headList[i].index = i;
                headList[i].flag = 1;
                headList[i].onclick = function(){
                    tabSort.call(this);
                    changeBackground();
                }
            }
        }
    };
    bindEvent();

}();