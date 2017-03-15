// 深度克隆
function deepClone (obj) {
  var result = null
  var oClass = isClass(obj)
  // 确定result的类型
  if (oClass === 'Object') {
    result = {}
  } else if (oClass === 'Array') {
    result = []
  } else {
    return obj
  }
  for (var key in obj) {
    var copy = obj[key]
    if (isClass(copy) === 'Object') {
      // 递归调用
      result[key] = deepClone(copy)
    } else if (isClass(copy) === 'Array') {
      result[key] = deepClone(copy)
    } else {
      result[key] = obj[key]
    }
  }
  return result
}
// 返回传递给他的任意对象的类
function isClass (o) {
  if (o === null) return 'Null'
  if (o === undefined) return 'Undefined'
  return Object.prototype.toString.call(o).slice(8, -1)
}

export default deepClone
