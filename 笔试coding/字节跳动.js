// function getTime(arr, n, interval, target) {
//     var res = arr[0];
//     var targetMinites = target[0] * 60 + target[1];
//     var min = targetMinites-arr[0][0]*60-arr[0][1]-interval;
//     for(var i=1;i<n;i++){
//         var item = arr[i];
//         var minites = item[0] * 60 + item[1];
//         var dis = targetMinites - minites - interval;
//         if (dis >=0 && dis<min) {
//             res = item;
//             min = dis;
//         }
//   }
//   return res;
// }
// var arr = [[5,0], [6,0],[7,0]];
// var res = getTime(arr,3,89,[6,59]);
// console.log(res.join(" "));

// function xor(res, val) {
//     if(res === val){
//         return 0;
//     }else{
//         return 1;
//     }
// }
// function getCode(N, K, str){
//     var codeArr = str.split("");
//     var res = [];
//     res.push(parseInt(codeArr[0]));
//     for(var i=1;i<N-1;i++){
//         var start = i-K+1>0 ? i-K+1: 0;
//         var cur = parseInt(codeArr[i]);
//         for(var j=start;j<i;j++){
//             cur = xor(cur, res[j]);
//         }
//         res.push(cur);
//     }
//     res.push(codeArr[codeArr.length-1]);
//     console.log(res.join(""));
// }
// getCode(6,2,"1110001");

function getMoney(arr, n) {
    var money = [];
    for(var i=0;i<n;i++){
        money[i] = 100;
    }
    for(var i=1;i<n;i++){
        if(arr[i]>arr[i-1]){
            money[i] = money[i-1]+100;
        }
    }
    console.log(money);
    for(var i=n-2;i>=0;i--){
        if(arr[i]>arr[i+1]){
            if(i-1>=0 && i-1<n){
                if(arr[i]<arr[i-1]){
                    money[i] = money[i+1]+100;
                    for(var k=i-1;k>=0;k--){
                        if(arr[k]>arr[k+1]){
                            money[k] = money[k+1]+100;
                        }else{
                            break;
                        }
                    }
                }
            }
        }
    }
    console.log(money);
    var res = money.reduce(function (prev, next) {
        return prev+next;
    });
    console.log(res);
}
var str1 = "1 2 3 4 5";
var str = "10 22 1 55 15 2 1";
var arr = str1.split(" ");
for(var i=0;i<arr.length;i++){
    arr[i] = parseInt(arr[i]);
}
getMoney(arr, arr.length);