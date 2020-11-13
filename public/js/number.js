/**
 * 加法运算
 * @param {Number} a
 * @param {Number} b
 * @example Math.addNum(0.3 , 0.6) // => 0.9
 */
const addNum = (a, b) => {
  var c, d, e
  try {
    c = a.toString().split('.')[1].length
  } catch (f) {
    c = 0
  }
  try {
    d = b.toString().split('.')[1].length
  } catch (f) {
    d = 0
  }
  return (e = Math.pow(10, Math.max(c, d))), (mulNum(a, e) + mulNum(b, e)) / e
}

/**
 * 减法运算
 * @param {Number} a
 * @param {Number} b
 * @example Math.subNum(0.3 , 0.2) // => 0.1
 */
const subNum = (a, b) => {
  var c, d, e
  try {
    c = a.toString().split('.')[1].length
  } catch (f) {
    c = 0
  }
  try {
    d = b.toString().split('.')[1].length
  } catch (f) {
    d = 0
  }
  return (e = Math.pow(10, Math.max(c, d))), (mulNum(a, e) - mulNum(b, e)) / e
}

/**
 * 乘法运算
 * @param {Number} a
 * @param {Number} b
 * @example Math.mulNum(0.3 , 1.5) // => 0.45
 */
const mulNum = (a, b) => {
  var c = 0,
    d = a.toString(),
    e = b.toString()
  try {
    c += d.split('.')[1].length
  } catch (f) {}
  try {
    c += e.split('.')[1].length
  } catch (f) {}
  return (Number(d.replace('.', '')) * Number(e.replace('.', ''))) / Math.pow(10, c)
}

/**
 * 除法运算
 * @param {Number} a
 * @param {Number} b
 * @example Math.divNum(0.3 , 0.1) // => 3
 */
const divNum = (a, b) => {
  var c,
    d,
    e = 0,
    f = 0
  try {
    e = a.toString().split('.')[1].length
  } catch (g) {}
  try {
    f = b.toString().split('.')[1].length
  } catch (g) {}
  return (
    (c = Number(a.toString().replace('.', ''))),
    (d = Number(b.toString().replace('.', ''))),
    mulNum(c / d, Math.pow(10, f - e))
  )
}
Math.divNum = divNum
Math.addNum = addNum
Math.subNum = subNum
Math.mulNum = mulNum
