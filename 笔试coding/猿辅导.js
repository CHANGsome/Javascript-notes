function getStr(str) {
    // 处理A11
    var reg1 = /([A-Z])(\d+)/;
    while(reg1.test(str)){
        str.replace(reg1, function () {
            var arr = str.split("");
            var c = arguments[1];
            var len = parseInt(arguments[2]);
            var index = parseInt(arguments[3]);
            var temp = "";
            for(var i=0;i<len;i++){
                temp += c;
            }
            arr.splice(index, arguments[0].length, temp);
            str = arr.join("");
        });
    }

    // 处理(AAB)2
    var reg2 = /\(([A-Z]+)\)(\d+)/;
    while(reg2.test(str)){
        str.replace(reg2, function () {
            var arr = str.split("");
            var target = arguments[1];
            var len = parseInt(arguments[2]);
            var index = parseInt(arguments[3]);
            var temp = "";
            for(var i=0;i<len;i++){
                temp += target;
            }
            arr.splice(index, arguments[0].length, temp);
            str = arr.join("");
        });
    }
    console.log(str);
}
//getStr("AA");
// 5
// A11B
// (AA)2A
// ((A2B)2)2G
// (YUANFUDAO)2JIAYOU
// A2BC4D2

var k=3,n=3;
function getRes(){
    var dp = [[],[]];
    dp[0][1] = 1;
    dp[1][2] = 1;
    dp[1][k] = 1;
    for(var i=1;i<=n;i++){
        for(var j=1;j<=k;j++){
            if(j===1){
                dp[i][1] = dp[i-1][2]+dp[i-1][k];
            }else if(j===k){
                dp[i][k] = dp[i-1][k-1]+dp[i-1][1];
            }else{
                dp[i][j] = dp[i-1][j-1]+dp[i-1][j+1];
            }
        }
    }
    console.log(dp[k][1]%1000000007);
}
getRes();