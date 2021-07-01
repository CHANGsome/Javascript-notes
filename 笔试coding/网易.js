function getArr(arr) {
    for (var i=0;i<arr.length;i++){
        var index = i;
        for(var j=i+1;j<arr.length;j++){
            if(arr[j]<arr[index] && (arr[i]+arr[j])%2===1){
                index = j;
            }
        }
        if(index!==i){
            var temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
        }
    }
    return arr.join(" ");
}

// console.log(getArr([1,2,4,3,5]));


function getMin(arr) {
    var res = [];
    for(var i=0;i<arr.length;i++){
        var arrSet = [];
        for(var j=0;j<arr.length;j++){
            var curArr = arr.slice(j, j+i+1);
            if(curArr.length === i+1){
                arrSet.push(Math.max(...curArr));
            }

        }
        res.push(Math.min(...arrSet));
    }
    console.log(res.join(" "));
}
getMin([1,3,2,4,6,5]);