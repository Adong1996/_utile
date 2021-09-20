function removeEvent(elem, type, handle) {
  if (elem.removeEventListener) { //非ie和非ie9
      elem.removeEventListener(type, handle, false);
  } else if (elem.detachEvent) { //ie6到ie8
      elem.detachEvent('on' + type, handle);
  } else {
      elem['on' + type] = null;
  }
}