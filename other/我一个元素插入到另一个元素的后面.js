Element.prototype.insertAfter = function (target, elen) {
  var nextElen = elen.nextElenmentSibling;
  if (nextElen == null) {
      this.appendChild(target);
  } else {
      this.insertBefore(target, nextElen);
  }
}