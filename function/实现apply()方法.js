Function.prototype.myApply = function () {
  var ctx = arguments[0] || window;
  ctx.fn = this;
  if (!arguments[1]) {
      var result = ctx.fn();
      delete ctx.fn;
      return result;
  }
  var result = ctx.fn(...arguments[1]);
  delete ctx.fn;
  return result;
}