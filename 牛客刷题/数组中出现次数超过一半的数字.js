function MoreThanHalfNum_Solution(numbers)
{
    // write code here
    if(numbers.length === 0){
        return 0;
    }
    if(numbers.length === 1){
        return numbers[0];
    }
    var count = {};
    for(var i=0;i<numbers.length;i++){
        if(count[numbers[i]] == null){
            count[numbers[i]] = 1;
        }else {
            count[numbers[i]]++;
            if(count[numbers[i]]>numbers.length/2){
                return numbers[i];
            }
        }
    }
    if(i === numbers.length){
        return 0;
    }

}

console.log(MoreThanHalfNum_Solution([1]));