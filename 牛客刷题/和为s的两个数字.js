function FindNumbersWithSum(array, sum)
{
    // write code here
    var result = [];
    for(let i=0;i<array.length;i++){
        var num = sum - array[i];
        if(array.indexOf(num) > -1){
            result.push(array[i], num);
            break;
        }
    }
    return result;
}
console.log(FindNumbersWithSum([1,2,3,4,5], 22));

