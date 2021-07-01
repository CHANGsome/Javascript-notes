function multiply(array)
{
    // write code here
    var b = [];
    if(array.length<=1){
        return b;
    }
    for(let i=0;i<array.length;i++){
        var result = 1;
        for(let j=0;j<array.length;j++){
            if(i == j){
                continue;
            }else{
                result *= array[j];
            }
        }
        b[i] = result;
    }
    return b;
}
var arr = [1,2,3,4,5];
console.log(multiply([1,2]));
