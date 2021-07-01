function jumpFloorII(number)
{
    // write code here
    if(number <=2 ) {
        return number;
    }else{
        var fn = 2;
        for(let i=3;i<=number;i++){
            fn = fn*2;
        }
        return fn;
    }
}
console.log(jumpFloorII(3))