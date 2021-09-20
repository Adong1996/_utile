function getWindonHref() {
  var sHref = window.location.href;
  var args = sHref.split('?');
  if (args[0] === sHref) {
      return '';
  }
  var hrefarr = args[1].split('#')[0].split('&');
  var obj = {};
  for (var i = 0; i < hrefarr.length; i++) {
      hrefarr[i] = hrefarr[i].split('=');
      obj[hrefarr[i][0]] = hrefarr[i][1];
  }
  return obj;
}