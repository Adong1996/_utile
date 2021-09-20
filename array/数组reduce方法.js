Array.prototype.myReduce = function (func, initialValue) {
  var len = this.length,
      nextValue,
      i;
  if (!initialValue) {
      // 没有传第二个参数
      nextValue = this[0];
      i = 1;
  } else {
      // 传了第二个参数
      nextValue = initialValue;
      i = 0;
  }
  for (; i < len; i++) {
      nextValue = func(nextValue, this[i], i, this);
  }
  return nextValue;
}