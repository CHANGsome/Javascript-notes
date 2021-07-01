// 日期相关函数
// 1.创建时间
let date = new Date();
console.log(date); // 2021-01-04T09:00:24.212Z

// 2.获取当前年份
console.log(date.getFullYear()); // 2021

// 3.获取月份（0-11）
console.log(date.getMonth()); // 0

// 4.获取当前日期（1-31日）
console.log(date.getDate()); // 4

// 5.获取当前时间(从1970.1.1开始的毫秒数)
console.log(date.getTime()); // 1609751663466

// 6.获取当前星期(0-6,0是星期天)
console.log(date.getDay()); // 1

// 7.获取当前小时数(0-23)
console.log(date.getHours()); // 17

// 8.获取当前分钟数(0-59)
console.log(date.getMinutes()); //19

// 9.获取当前秒(0-59)
console.log(date.getSeconds()); //14

// 10.获取当前毫秒数(0-999)
console.log(date.getMilliseconds()); //568

// 11.获取当前日期
console.log(date.toLocaleDateString()); // /1/4/2021

// 12.获取当前时间
console.log(date.toLocaleTimeString()); // 5:23:07 PM

// 13.获取当前日期与时间
console.log(date.toLocaleString()); // 1/4/2021, 5:23:52 PM
