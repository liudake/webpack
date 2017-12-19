import Vue from 'vue'
import util from './util'
// 格式化时间数据
Vue.filter('formatDate', (date, fmt) => {
  if (date) {
    var dates = new Date(Date.parse(date.replace(/-/g, '/')))
    return util.format(dates, fmt)
  }
})

Vue.filter('cutstr', (val, split) => {
  return util.padString(val, split)
})