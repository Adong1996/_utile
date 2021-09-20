String.prototype.firstAppear = function () {
  var obj = {},
      len = this.length;
  for (var i = 0; i < len; i++) {
      if (obj[this[i]]) {
          obj[this[i]]++;
      } else {
          obj[this[i]] = 1;
      }
  }
  for (var prop in obj) {
     if (obj[prop] == 1) {
       return prop;
     }
  }
}