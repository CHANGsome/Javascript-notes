function GetNumberOfK(data, k)
{
    // write code here
    var pos = data.indexOf(k);
    var count = 0;
    if(k == -1){
        return 0;
    }else {
        for(var i=pos;i<data.length;i++){
            if(data[i] == k){
                count ++;
            }else{
                return count;
            }
        }
        if(i == data.length){
            return count;
        }
    }
}
console.log(GetNumberOfK([1,2,2,3,4,4,4],2));