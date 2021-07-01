function reOrderArray(array)
{
    // write code here
    var oddArr = [];
    var evenArr = [];
    for(let i=0;i<array.length;i++){
        if(array[i]%2 == 0){
            evenArr.push(array[i]);
        }else if(array[i]%2 == 1){
            oddArr.push(array[i]);
        }
    }
    return oddArr.concat(evenArr);
}
var arr = [2,31,44,,3,65,6,48];
console.log(reOrderArray(arr));