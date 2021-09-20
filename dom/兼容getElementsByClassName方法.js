Element.prototype.getElementsByClassName = Document.prototype.getElementsByClassName = function (_className) {
  var allDomArray = document.getElementsByTagName('*');
  var lastDomArray = [];
  function trimSpace(strClass) {
      var reg = /\s+/g;
      return strClass.replace(reg, ' ').trim()
  }
  for (var i = 0; i < allDomArray.length; i++) {
      var classArray = trimSpace(allDomArray[i].className).split(' ');
      for (var j = 0; j < classArray.length; j++) {
          if (classArray[j] == _className) {
              lastDomArray.push(allDomArray[i]);
              break;
          }
      }
  }
  return lastDomArray;
}