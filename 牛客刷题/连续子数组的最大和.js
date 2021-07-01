function FindGreatestSumOfSubArray(array)
{
    // write code here
    var max = array[0];
    var sum = array[0];
    for(let i=1;i<array.length;i++){
        if(sum<0){
            sum = array[i];
        }else{
            sum += array[i];
        }
        if(sum>max){
            max = sum;
        }
    }
    return max;
}

console.log(FindGreatestSumOfSubArray([6, -3, -2, 7, -15, 1, 2, 2]));

