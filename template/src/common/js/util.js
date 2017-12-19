/* eslint-disable */

/**
 * 防抖、节流函数
 */
function debounce(fn, wait, immediate) {
  let timeout, args, context, timestamp, result
  return function() {
    context = this
    args = arguments
    timestamp = new Date()
    const later = () => {
      const last = new Date() - timestamp
      if (last < wait) {
        timeout = setTimeout(later, wait - last)
      } else {
        timeout = null
        result = fn.apply(context, args)
      }
    }
    if (!timeout) {
      timeout = setTimeout(later, wait)
    }
    return result
  }
}

/**
 * 截取列表时间
 */
function padString(str, split) {
  var str = String(str),
    len = str.length,
    split = split >> 0,
    first = split >= 0 ? str.substr(0, len - split) : str.substr(0, len + split)
  return first
}

/**
 * 日期格式化
 * 调用
 * format("yyyy-MM-dd hh:mm:ss")
 */
function format(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      )
    }
  }
  return fmt
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}

/**
 * 获取股票所属区域
 */
function getStockArea(stockcode) {
  let stockarea = ''
  if (stockcode) {
    if (stockcode.indexOf('6') === 0) {
      stockarea = 'SH'
    } else {
      stockarea = 'SZ'
    }
  }
  return stockarea
}
/**
 * param 将要转为URL参数字符串的对象
 * key URL参数字符串的前缀
 * encode true/false 是否进行URL编码,默认为true
 *
 * return URL参数字符串
 ====================================================*/
function parseParam(param, key, encode) {
  if (param == null) return ''
  let paramStr = ''
  const t = typeof param
  if (t == 'string' || t == 'number' || t == 'boolean') {
    paramStr += `&${key}=${
      encode == null || encode ? encodeURIComponent(param) : param
    }`
  } else {
    for (const i in param) {
      const k =
        key == null ? i : key + (param instanceof Array ? `[${i}]` : `.${i}`)
      paramStr += `&${parseParam(param[i], k, encode)}`
    }
  }
  return paramStr.substr(1)
}

/**
 * 去掉特殊字符
 */
function excludeSpecial(str) {
  str = str.replace(/[\%\^\&\_\+\{\}\:\"\<\>\?]/g, '')
  return str
}

//LCT添加，用于获取深层对象。
const get = p => o =>
  p.split('.').reduce((xs, x) => (xs && xs[x] ? xs[x] : null), o)

export default {
  debounce,
  padString,
  get,
  getStockArea,
  format,
  excludeSpecial,
  parseParam
}
