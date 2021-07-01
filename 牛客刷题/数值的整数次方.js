function Power(base, exponent)
{
    // write code here
    if(exponent == 0){
        return 1;
    }
    var result = 1;
    for(let i=1;i<=Math.abs(exponent);i++){
        result = result*base;
    }
    if(exponent<0){
        return 1/result;
    }else if(exponent>0){
        return result;
    }
}

console.log(Power(2, 3));