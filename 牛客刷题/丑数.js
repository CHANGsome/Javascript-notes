function GetUglyNumber_Solution(index)
{
    // write code here
    var getM = function(value, arr){
        for(let i=0;i<arr.length;i++){
            if(arr[i]>value){
                return arr[i];
            }
        }
    }

    var arr = [1];
    if(index<=0){
        return 0;
    }
    if(index == 1){
        return 1;
    }
    for(let i=1;i<index;) {
        let arr2 = [], arr3 = [], arr5 = [];
        for (let j = 0; j < arr.length; j++) {
            arr2.push(2 * arr[j]);
            arr3.push(3 * arr[j]);
            arr5.push(5 * arr[j]);
        }
        var M2 = getM(arr[arr.length - 1], arr2);
        var M3 = getM(arr[arr.length - 1], arr3);
        var M5 = getM(arr[arr.length - 1], arr5);
        var M = M2 < M3 ? (M2 < M5 ? M2 : M5) : (M3 < M5 ? M3 : M5);
        arr.push(M);
        i++;
    }
    return arr[index-1];

}

console.log(GetUglyNumber_Solution(7));