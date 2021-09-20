Function.prototype.myBind = function (target) {
  var target = target || window;
  var _args1 = [].slice.call(arguments, 1);
  var self = this;
  var temp = function () {};
  var F = function () {
      var _args2 = [].slice.call(arguments, 0);
      var parasArr = _args1.concat(_args2);
      return self.apply(this instanceof temp ? this : target, parasArr)
  }
  temp.prototype = self.prototype;
  F.prototype = new temp();
  return F;
}