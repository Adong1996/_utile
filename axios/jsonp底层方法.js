function jsonp(url, callback) {
  var oscript = document.createElement('script');
  if (oscript.readyState) { // ie8及以下版本
      oscript.onreadystatechange = function () {
          if (oscript.readyState === 'complete' || oscript.readyState === 'loaded') {
              callback();
          }
      }
  } else {
      oscript.onload = function () {
          callback()
      };
  }
  oscript.src = url;
  document.body.appendChild(oscript);
}