function insertSort(arr) {
    for(let i=1;i<arr.length;i++){
        var insertedEle = arr[i];
        for(let j=i-1;j>=0;j--){
            if(arr[j]>insertedEle){
                arr[j+1] = arr[j];
            }else{
                arr[j+1] = insertedEle;
                break;
            }
        }
        console.log(arr);
    }
}
let arr = [1,4,2,3,5];
insertSort(arr);
console.log(arr);