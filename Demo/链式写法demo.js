// 基于Number内置类扩展两个方法：plus、minus（并实现链式写法）
// (5).plus(3).minus(2) 5+3-2=6

Number.prototype.plus = function (num) {
    return this + num;
};
Number.prototype.minus = function (num) {
    return this-num;
};
console.log((5).plus(3).minus(2));


// 实现数组中的slice方法
/*
* slice(n,m)
* slice(n) slice(0)
* slice()
* n和m是负数
* n>m
* n或m超出了整个数组的范围
*
* */

Array.prototype.my_slice = function (n, m) {
    var start = 0, end = this.length;
    if(typeof n !== "undefined" && typeof m !== "undefined"){
        start = n;
        end = m;
    }else if(typeof n !== "undefined" && typeof m === "undefined"){
        start = n;
    }
    if(start<0){
        start += this.length;
    }
    if(end<0){
        end += this.length;
    }
    if(end>=this.length){
        end = this.length;
    }
    if(start>=this.length || start>=end){
        return [];
    }
    console.log(start, end);
    var arr = [];
    for(var i=start; i<end;i++){
        arr.push(this[i]);
    }
    return arr;
}
var arr = [4,3,2,1,5];
console.log(arr.my_slice(9,99));