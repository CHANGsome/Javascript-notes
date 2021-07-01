function FirstNotRepeatingChar(str)
{
    // write code here
    var charCount = {};
    for(let i=0;i<str.length;i++){
        if(!charCount[str[i]]){
            charCount[str[i]] = 1;
        }else{
            charCount[str[i]]++;
        }
    }
    var objectChar = null;
    try{
        Object.keys(charCount).forEach(function (key) {
            if(charCount[key] == 1){
                objectChar = key;
                throw new Error("end"); //跳出循环
            }
        })
    }catch (e){
        if(e.message != "end"){
            throw e;
        }
    }
    return str.indexOf(objectChar);
}

console.log(FirstNotRepeatingChar(''));