// 给定页面上的DOM元素,将访问元素本身及其所有后代(不仅仅是它的直接子元素)
// 对于每个访问的元素，函数讲元素传递给提供的回调函数
function traverse(element, callback) {
  callback(element);
  var list = element.children;
  for (var i = 0; i < list.length; i++) {
      traverse(list[i], callback);
  }
}