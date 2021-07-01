function minNumberInRotateArray(rotateArray)
{
    // write code here
    if(rotateArray.length == 0){
        return 0;
    }
    var currentValue = rotateArray[0];
    for (var i=1;i<rotateArray.length;i++){
        if(rotateArray[i]>=currentValue){
            currentValue = rotateArray[i];
        }else {
            return rotateArray[i];
        }
    }
    if( i == rotateArray.length){
        return rotateArray[0];
    }
}
var arr1 = [3,4,5,1,2];
var arr2 = [5,5,5,5,5];
console.log(minNumberInRotateArray([]));