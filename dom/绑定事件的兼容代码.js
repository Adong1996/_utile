function addEvent(elem, type, handle) {
  if (elem.addEventListener) { //非ie和非ie9
      elem.addEventListener(type, handle, false);
  } else if (elem.attachEvent) { //ie6到ie8
      elem.attachEvent('on' + type, function () {
          handle.call(elem);
      })
  } else {
      elem['on' + type] = handle;
  }
}