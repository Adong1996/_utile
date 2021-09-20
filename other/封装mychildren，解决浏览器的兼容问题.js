function myChildren(e) {
  var children = e.childNodes,
      arr = [],
      len = children.length;
  for (var i = 0; i < len; i++) {
      if (children[i].nodeType === 1) {
          arr.push(children[i])
      }
  }
  return arr;
}