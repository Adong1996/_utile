Function.prototype.myCall = function () {
  var ctx = arguments[0] || window;
  ctx.fn = this;
  var args = [];
  for (var i = 1; i < arguments.length; i++) {
      args.push(arguments[i])
  }
  var result = ctx.fn(...args);
  delete ctx.fn;
  return result;
}