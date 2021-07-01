
var arr = [
    {name: "zaaa", age: 11},
    {name: "bgbb", age: 9},
    {name: "bbccc", age: 21},
];

//按年龄(数字)排序
arr.sort(function(a,b){
    // return parseFloat(a.age) - parseFloat(b.age);   // 有小到大
    return (parseFloat(a.age) - parseFloat(b.age))*-1;   // 有大到小
});
// console.log(arr);

// 按名字（字符）排序: str.localeCompare(str1)
// "aaa'.localeCompare("bbb") => -1
// 中文字符串会先变成拼音再比较，如果拼音相同就按照中文字符在ASCII码中位置

arr.sort(function(a,b){
    return a.name.localeCompare(b.name);
});
console.log(arr);