function debounce(handle, delay) {
  var timer = null;
  return function (_args) {
      var _self = this,
          _args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
          handle.apply(_self, _args)
      }, delay)
  }
}
