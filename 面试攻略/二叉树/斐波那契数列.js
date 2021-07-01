function Fibonacci(n)
{
    // write code here
    if(number <= 2){
        return number;
    }else{
        var f1 = 2,f2 = 1,fn=0;
        for(let i=3;i<=number;i++){
            fn = f1+f2;
            f2 = f1;
            f1 = fn;
        }
        return fn;
    }
}

console.log(Fibonacci(4));