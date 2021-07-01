var str = "abcdefg";
// 获取字符
console.log(str.charAt(1)); // "b"

// 获取指定字符的索引，第二个参数指定从哪个位置开始查找
console.log(str.indexOf("c", 1));   // 2
console.log(str.indexOf("c"));   // 2
console.log(str.lastIndexOf("c", 1));    // -1
console.log(str.lastIndexOf("c", 6));    // 2

// 截取字符串
console.log(str.substring(1, 4));
console.log(str.slice(1, 4));
console.log(str.substr(1, 4));

// 字符串分割，参数可以是字符或者正则，返回数组
console.log(str.split(""));
console.log(str.split());

str.replace(rgExp/substr,replaceText);   // 返回替换后的字符串

str.match(rgExp);  // 正则匹配