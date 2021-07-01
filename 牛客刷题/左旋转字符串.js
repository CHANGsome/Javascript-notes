function LeftRotateString(str, n)
{
    // write code here
    // if(!str){
    //     return '';
    // }
    // return str.slice(n).concat(str.slice(0,n));

    if(str==null||str.length==0){
        return "";
    }
    n=n%str.length;
    console.log(n);
    return str.slice(n)+str.slice(0,n);
}

console.log(LeftRotateString('ab',3));