function quickSort(arr){
    if(arr.length<=1){
        return arr;
    }
    var baseIndex = 0;
    var i = 1, j = arr.length-1;
    while(i<j){
        while(arr[j]>arr[baseIndex] && i<j){
            j--;
        }
        while(arr[i]<=arr[baseIndex] && i<j){
            i++;
        }
        if(i<j){
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++; j--;
        }
    }
    var left = null;
    if(i===j){
        if(arr[i]<=arr[baseIndex]){
           left = i+1;
        }else{
            left = i;
        }
    }
    if(j<i){
        left = j+1;
    }
    return quickSort(arr.slice(1, left)).concat([arr[baseIndex]]).concat(quickSort(arr.slice(left, arr.length)));
}

console.log(quickSort([1,4,2,66,2]));