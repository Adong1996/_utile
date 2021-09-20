function getStyle(elem, prop) {
  return window.getComputedStyle ? window.getComputedStyle(elem, null)[prop] : elem.currentStyle[prop]
}