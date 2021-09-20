Array.prototype.myForEach = function (func, obj) {
  var len = this.length;
  var _this = arguments[1] ? arguments[1] : window;
  // var _this=arguments[1]||window;
  for (var i = 0; i < len; i++) {
      func.call(_this, this[i], i, this)
  }
}