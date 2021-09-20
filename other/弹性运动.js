function ElasticMovement(obj, target) {
  clearInterval(obj.timer);
  var iSpeed = 40,
      a, u = 0.8;
  obj.timer = setInterval(function () {
      a = (target - obj.offsetLeft) / 8;
      iSpeed = iSpeed + a;
      iSpeed = iSpeed * u;
      if (Math.abs(iSpeed) <= 1 && Math.abs(a) <= 1) {
          console.log('over')
          clearInterval(obj.timer);
          obj.style.left = target + 'px';
      } else {
          obj.style.left = obj.offsetLeft + iSpeed + 'px';
      }
  }, 30);
}