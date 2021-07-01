function FindContinuousSequence(sum)
{
    // write code here
    if(sum<3){
        return [];
    }
    var resArr = [];
    for(let i=1;i<= Number(sum/2)+1;i++){
        var value = 1-4*(-Math.pow(i,2)+i-2*sum);
        if((value > 0) && (Math.sqrt(value)%1 === 0)){
            var n = (Math.sqrt(value)-1)/2;
            if (n%1 === 0){
                var arr = [];
                for(let j=i;j<=n;j++){
                    arr.push(j);
                }
                resArr.push(arr);
            }
        }
    }
    return resArr;
}

console.log(FindContinuousSequence(10000));