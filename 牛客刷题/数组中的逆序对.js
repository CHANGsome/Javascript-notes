function InversePairs(data)
{
    // write code here
    return countInversePairs(data, 0, data.length-1)%1000000007;
    function countInversePairs(arr, first, last) {
        if((last-first)<=0){
            return 0;
        }
        var mid = first+parseInt((last-first)/2);
        var left = countInversePairs(arr, first, mid);
        var right = countInversePairs(arr, mid+1, last);
        var count = 0;
        var i=mid, j = last;
        var temp = [];
        while(i>=first && j>=mid+1){
            if(arr[i]>arr[j]){
                temp.push(arr[i]);
                count += j-mid;
                i--;
            }else if(arr[i] == arr[j]){
                temp.push(arr[i]);
                temp.push(arr[j]);
                count += j-mid-1;
                i--;
                j--;
            }else{
                temp.push(arr[j]);
                j--;
            }
        }
        while (i>=first){
            temp.push(arr[i]);
            i--;
        }
        while (j>=mid+1){
            temp.push(arr[j]);
            j--;
        }
        temp.reverse();
        for(let k=0;k<temp.length;k++){
            arr[first+k] = temp[k];
        }
        temp = null;
        return left+right+count;
    }

}

console.log(InversePairs([1,2,3,4,5,6,7,0]));