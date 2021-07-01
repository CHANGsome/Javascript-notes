// const PENDING = 'pending';  // 初始态
//
// function Promise(){
//
// }

function ajax(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.onreadystatechange = function () {
            if(xhr.readyState !== 4){
                return ;
            }
            if(xhr.status === 200){
                resolve(xhr.responseText);
            }else {
                reject(new Error(xhr.status));
            }
        }
        xhr.onerror = function (e) {
            reject(e);
        }
        xhr.send(null);
    });
}

ajax("./hhh.txt").then(function (data) {
    console.log(data);
},function (e) {
    console.log(e);
    return ajax('./hhh.xtx');
}).catch(function (e) {
    console.log("error");
    console.log(e);
});

//  Promise.all和 Promise.race
// var data1 = ajax("./data1.txt");
// var data2 = ajax("./data2.txt");
// Promise.all([data1, data2]).then(function (data) {
//     console.log(data);
// });
// Promise.race([data1, data2]).then(function (data) {
//     console.log(data);
// });


// async 和 await
// const load = async function () {
//     var data1 = await ajax("./data1.txt");
//     console.log(data1);
//     var data2 = await ajax("./data2.txt");
//     console.log(data2);
// };
// load();