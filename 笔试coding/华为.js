// function getRes(num) {
//     var str = num.toString(2).split("").reverse().join("");
//     var target = '101';
//     var res = [0, -1];
//     var index = str.indexOf(target);
//     if(index === -1){
//         return res;
//     }else{
//         res[0] ++;
//         res[1] = index;
//     }
//     str = str.slice(index+2);
//     while(str.length>2){
//         if(str.indexOf(target) !== -1){
//             res[0] ++;
//             str = str.slice(index+2);
//         }else{
//             break;
//         }
//     }
//     return res;
// }
//
// console.log(getRes(21).join(" "));

function getRes(str) {
    var reg = /^(([0-9a-zA-Z]|!|@|#|\$|%|\^|&|\*|\(|\))|("(([0-9a-zA-Z]|!|@|#|\$|%|\^|&|\*|\(|\))*|(""|,)+)+"))|((([0-9a-zA-Z]|!|@|#|\$|%|\^|&|\*|\(|\))|("(([0-9a-zA-Z]|!|@|#|\$|%|\^|&|\*|\(|\))*|(""|,)+)+")),(([0-9a-zA-Z]|!|@|#|\$|%|\^|&|\*|\(|\))|("(([0-9a-zA-Z]|!|@|#|\$|%|\^|&|\*|\(|\))*|(""|,)+)+")))$/;
    if(reg.test(str)){
        var reg2 = /^([0-9a-zA-Z]|!|@|#|\$|%|\^|&|\*|\(|\)|"|,)+$/;
        if(!reg2.test(str)){
            console.log("ERROR");
            return ;
        }
        var reg1 = /"(([0-9a-zA-Z]|!|@|#|\$|%|\^|&|\*|\(|\))*|(""|,)+)+"/g;
        str.replace(reg1, function(){
            var target = arguments[0];
            var temp = target;
            target = target.slice(1,target.length-1);
            target = target.replace('""', '"');
            target = target.replace(",",".");
            str = str.replace(temp, target);
        });
        var arr = str.split(",");
        console.log(arr.length);
        arr.forEach(function (item) {
            if(item === ""){
                console.log("--");
            }else if(item.indexOf(".")!==-1){
                console.log(item.replace(".",","));
            }else{
                console.log(item);
            }
        })
    }else{
        console.log("ERROR");
    }

}

getRes('a,,1,#,""""');