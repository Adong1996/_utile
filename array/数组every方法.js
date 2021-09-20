Array.prototype.myEvery = function (func) {
  var flag = true;
  var len = this.length;
  var _this = arguments[1] || window;
  for (var i = 0; i < len; i++) {
      if (func.apply(_this, [this[i], i, this]) == false) {
          flag = false;
          break;
      }
  }
  return flag;
}