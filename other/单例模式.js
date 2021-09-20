function getSingle(func) {
  var result;
  return function () {
      if (!result) {
          result = new func(arguments);
      }
      return result;
  }
}