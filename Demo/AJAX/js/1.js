let xhr = new XMLHttpRequest();
xhr.open('get', 'temp.xml?_='+Math.random(), true);

xhr.setRequestHeader("xxx", 'xxx');
// 请求头部内容不能出现中文汉字
// 设置请求头信息必须在open之后send之前

xhr.timeout = 1000;
xhr.ontimeout = ()=>{
    console.log('当前请求超时');
    xhr.abort();
}

xhr.onreadystatechange = ()=>{
    let {readyState: state, status} = xhr;

    // 说明请求数据成功了
    if(!/^(2|3)\d{2}$/.test(status)) return;

    // 在状态为2的时候就可以获取响应信息了
    if(state === 2){
        let headerAll = xhr.getAllResponseHeaders();
        let serverData = xhr.getResponseHeader('date');
        console.log(headerAll, new Date(serverData));
        return;
    }

    // 在状态为4的时候，响应主体内容就回来了
    if(state === 4){
        let valueText = xhr.responseText;   // 获取到的结果一般都是JSON字符串（可以使用json.parse将其转换成JSON对象）
        let valueXML = xhr.responseXML;
        console.log(valueText, valueXML);
    }
};

xhr.send('name=zxt&age=28&sex=man');








