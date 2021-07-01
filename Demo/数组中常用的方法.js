 // forEach，for in，for，for of的区别
 let arr = [1,2,3,4];
arr.b = 100;
for(let i=0;i<arr.length;i++){  // 编程式
    console.log(arr[i]);
}

// 1）forEach不支持return
arr.forEach(function(item){ // 声明式，不关心如何实现
    console.log(item);
});
for(let key in arr){    // key会变成字符串类型，包括数组的私有属性也会被遍历
    console.log(arr[key]);
}
for(let val of arr){    // 支持return，并且是值of数组（不能遍历对象）
    console.log(val);
}

// 用for of遍历对象，Object.keys将obj的key作为新的数组
 let obj = {name: "aaa", age: 22};
 for(let key of Object.keys(obj)){
     console.log(obj[key]);
 }

 // 1、是否操作原数组，2、返回结果，3、回调函数的返回结果

 // 2）filter：（删除）
 // 1、不改变原数组，2、返回过滤后的新数组，3、回调函数返回布尔值：若返回true，会把当前项放到新数组中
 let newArr = [1,2,3,4,5].filter(function (item) {
     return 2<item && item<5;
 });
 console.log(newArr);

 // 3）map：映射，将原有的数组映射成一个新数组（更新）
 // 1、不改变原有数组，2、返回新数组 3、新数组的每一项等于回调函数的返回值
 let newArr1 = [1,2,3].map(function (item) {
     return `<li>${item}</li>`;
 });
 console.log(newArr1);

 // 4）includes:返回boolean
 console.log([1, 2, 3].includes(3));

 // 5）find：返回找到的那一项。
 // 不会改变原数组，回调函数中返回true表示找到了，停止循环，找不到返回undefined
 let res = [1,2,3,4,5].find(function (item, index) {
     return item === 5;
 });
 console.log(res);

 // 6）some：找true，找到true后停止，返回true，找不到返回false
 // 7）every: 找false，找到false后停止，返回false
 let res1 = [1,2,3].some(function (item,index) {
     return item == 3;
 });
 console.log(res1);

// 8）reduce：收敛，四个参数
 // 返回的是叠加后的结果，原数组不发生变化，回调函数中的参数：
 // prev代表数组的第一项，next代表数组的第二项
 // 第二次prev是undefined，next是数组的第二项

 let sum = [1,2,3,4,5].reduce(function (prev,next,index,item) {
     console.log(prev,next);
     return prev+next;  // 本次的返回值，会作为下一次的prev
 });
 console.log(sum);

 let sum2 = [{price:30,count:3},{price:30,count:2},{price:30,count:4}].reduce(function (prev,next) {
     return prev+next.price*next.count;
 }, 0);
 console.log(sum2);

 // reduce实现数组扁平化
 let flat = [[1,2,3],[4,5,6],[7,8,9]].reduce(function (prev,next) {
     return prev.concat(next);
 });
 console.log(flat);
