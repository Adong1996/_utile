/* 
 1. 自定义new工具函数
  语法: newInstance(Fn, ...args)
  功能: 创建Fn构造函数的实例对象
  实现: 创建空对象obj, 调用Fn指定this为obj, 返回obj
*/

export function newInstance(Fn, ...args) {
  
  // 创建一个空对象
  const obj = {}
  

  // 调用Fn函数, 且指定this是新创建对象
  const result = Fn.apply(obj, args)
  
  // 如果Fn执行返回的是对象类型, 最终的结果就是这个对象
  if (result instanceof Object) {
    return result
  }

  // 让原型对象是空的object对象, 且constructor属性为Fn
  /* 
  obj.__proto__ = {}
  obj.__proto__.constructor = Fn
  问题: 创建每个实例的原型对象不是同一个(实际要求的是同一个)
  */
  obj.__proto__ = Fn.prototype  // 将构造函数的显示原型属性值赋值实例对象的隐式原型属性

  // 返回新建的对象
  return obj
}

// new 关键字
/*
  创建了一个空对象，作为将要返回的对象实例
  将这个空对象的原型，指向构造函数的prototype属性
  将这个空对象赋值给函数内部的this关键字
  开始执行构造函数内部的代码
 */

  function _new(constructor, params) {
    // 将 arguments 对象转为数组
    var args = [].slice.call(arguments)
    // 取出构造函数
    var constructor = arr.shift()
    // 创建一个空对象，继承构造函数的 prototype 属性
    var context = Object.create(constructor.prototype)
     // 执行构造函数 传入剩余参数
    var result = constructor.apply(context, args)
     // 如果返回结果是对象，就直接返回，否则返回 context 对象
     // 如果构造函数内部有return语句，而且return后面跟着一个对象，new命令会返回return语句指定的对象；否则，就会不管return语句，返回this对象。
    return (typeof result === 'object' && result != null) ? result : context
  }
