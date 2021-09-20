Array.prototype.myMap = function (func) {
  var arr = [];
  var len = this.length;
  var _this = arguments[1] || window;
  for (var i = 0; i < len; i++) {
      arr.push(func.call(_this, this[i], i, this));
  }
  return arr;
}