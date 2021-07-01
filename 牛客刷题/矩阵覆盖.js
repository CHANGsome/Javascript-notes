function rectCover(number)
{
    // write code here
    if(number <=2 ){
        return number;
    }else{
        var fn=0, f1=2, f2=1;
        for(let i=3;i<=number;i++){
            fn = f1 + f2;
            f2 = f1;
            f1 = fn;
        }
        return fn;
    }
}
console.log(rectCover(3))