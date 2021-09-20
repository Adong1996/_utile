function throttle(handler, wait) {
  var lastTime = 0;
  return function (e) {
      var nowTime = new Date().getTime();
      if (nowTime - lastTime > wait) {
          handler.apply(this, arguments);
          lastTime = nowTime;
      }
  }
}