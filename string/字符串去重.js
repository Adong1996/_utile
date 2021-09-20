function unique(oldStr) {
  var obj = {},
    newStr = '';
  for (var i = 0; i < oldStr.length; i++) {
    if (!obj[oldStr[i]]) {
      newStr += oldStr[i];
      obj[oldStr[i]] = true
    }
  }
  return newStr;
}

// 可以利用正则