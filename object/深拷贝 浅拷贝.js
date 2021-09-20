//深克隆（深克隆不考虑函数）

function deepClone(obj, result) {
  var result = result || {}
  for(var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (typeof obj[prop] === 'object' && obj[prop] !== null) {
        //引用值(obj/array)且不为null
        if (Object.prototype.toString.call(obj[prop]) === '[object Object]') {
          // 对象
          result[prop] = {};
        } else {
          // 数组
          result[prop] = [];
        }
        deepClone(obj[prop], result[prop])
      } else {
        // 原始值或func
        result[prop] = obj[prop]
      }
    } 
  }
  return result
}

// 深浅克隆是针对引用值

function deepClone(target) {
  if (typeof (target) !== 'object') {
    return target
  }
  var result
  if (Object.prototype.toString.call(target) === '[object Array]') {
    // Array
    result = []
  } else {
    // Object
    result = {};
  }
  for (var prop in target) {
    if (Object.hasOwnProperty.call(prop)) {
      result[prop] = deepClone(target[prop])
    }
  }
  return result
}

// 无法复制函数
var o1 = jsON.parse(jsON.stringify(obj1));
