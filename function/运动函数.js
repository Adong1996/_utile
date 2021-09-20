function animate(obj, json, callback) {
  clearInterval(obj.timer);
  var speed,
      current;
  obj.timer = setInterval(function () {
      var lock = true;
      for (var prop in json) {
          if (prop == 'opacity') {
              current = parseFloat(window.getComputedStyle(obj, null)[prop]) * 100;
          } else {
              current = parseInt(window.getComputedStyle(obj, null)[prop]);
          }
          speed = (json[prop] - current) / 7;
          speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

          if (prop == 'opacity') {
              obj.style[prop] = (current + speed) / 100;
          } else {
              obj.style[prop] = current + speed + 'px';
          }
          if (current != json[prop]) {
              lock = false;
          }
      }
      if (lock) {
          clearInterval(obj.timer);
          typeof callback == 'function' ? callback() : '';
      }
  }, 30)
}