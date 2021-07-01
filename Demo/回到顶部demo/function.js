~(function () {
  var right = document.querySelector('.right');
  var content = document.querySelector('.content');
  var contentList = [].slice.call(content.querySelectorAll('div'), 1);
  var rightList = right.querySelectorAll('a');
  var rightAlist = [].slice.call(rightList, 0, rightList.length - 1);
  var topButton = document.querySelector('.to-top');

  function listenScroll() {
    var scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    var windowHeight =
      document.documentElement.clientHeight || document.body.clientHeight;
    var floorWinDis = [];
    for (var i = 0; i < contentList.length; i++) {
      floorWinDis.push(computedWinDis(contentList[i]).top);
    }
    right.style.display = scrollTop > windowHeight ? 'block' : null;

    floorWinDis.forEach(function (value, index) {
      var toTopDis = floorWinDis[index] - scrollTop;
      rightAlist[index].className =
        toTopDis >= 0 && toTopDis <= windowHeight ? 'active' : null;
    });
  }
  window.onscroll = listenScroll;

  function computedWinDis(ele) {
    var totalLeft = ele.offsetLeft;
    var totalTop = ele.offsetTop;
    var parent = ele.offsetParent;
    if (parent) {
      if (navigator.userAgent.indexOf('MSIE 8.0') === -1) {
        totalLeft += parent.clientLeft;
        totalTop += parent.clientTop;
      }
      totalLeft += parent.offsetLeft;
      totalTop += parent.offsetTop;
      parent = parent.offsetParent;
    }
    return { left: totalLeft, top: totalTop };
  }
  topButton.onclick = function () {
    right.style.display = 'none';
    var duration = 500;
    var interval = 50;
    var distance =
      document.documentElement.scrollTop || document.body.scrollTop;
    var step = (distance / duration) * interval;
    var timer = setInterval(function () {
      distance = document.documentElement.scrollTop || document.body.scrollTop;
      if (distance <= 0) {
        window.onscroll = listenScroll;
        clearInterval(timer);
        return;
      }
      document.documentElement.scrollTop -= step;
      document.body.scrollTop -= step;
    }, interval);
    window.onscroll = null;
  };
  function goFloor() {
    console.log(this);
    var index = this.index;
    var dis = computedWinDis(contentList[index]);
    console.log(dis);
    document.documentElement.scrollTop = dis.top;
    document.body.scrollTop = dis.top;
  }
  ~(function () {
    rightAlist.forEach(function (ele, index) {
      ele.style.cursor = 'pointer';
      ele.index = index;
      ele.onclick = goFloor;
    });
  })();
})();
