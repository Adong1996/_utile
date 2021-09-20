function hasChildren(e) {
  var children = e.childNodes,
      len = children.length;
  for (var i = 0; i < len; i++) {
      if (children[i].nodeType === 1) {
          return true;
      }
  }
  return false;
}