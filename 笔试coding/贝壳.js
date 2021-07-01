var inputs = "2 2".split(" ");
var n = parseInt(inputs[0]);
var m = parseInt(inputs[1]);
function getRes(n,m) {
    if(n<1 || m<1){
        return 0;
    }
    var totalPoint = (n+1)*(m+1);
    var res = totalPoint*(totalPoint-1)*(totalPoint-2)/6;
    var exclude1 = (n-1)*(m-1)*2;
    var count = 2;
    while(count*2<=n){
        exclude1 += (n+1-count*2)*(m-1)*2;
        var c1 = 2;
        while(c1*2<=m){
            exclude1 += (n+1-count*2)*(m+1-c1*2)*2;
            c1++;
        }
        count++;
    }
    count = 2;
    while(count*2<=m){
        exclude1 += (m+1-count*2)*(n-1)*2;
        var c1 = 2;
        while(c1*2<=n){
            exclude1 += (n+1-count*2)*(n+1-c1*2)*2;
            c1++;
        }
        count++;
    }
    var exclude2 = (n+1)*((m+1)*m*(m-1)/6)+(m+1)*((n+1)*n*(n-1)/6);
    console.log(res - exclude1- exclude2);
}
getRes(n,m);