import axios from 'axios'

/**
 * [请求时拦截器和响应时拦截器]
 * request      [请求拦截器]
 * response     [响应时拦截器]
 * checkStatus  [http状态码正常，则直接返回数据]
 * checkCode    [http状态码异常，提示告诉用户]
 */
axios.interceptors.request.use(
  config => {
    // 请求时做一些处理
    return config
  },
  error => {
    // 当请求异常时做一些处理
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    // 返回响应时做一些处理
    return response
  },
  error => {
    // 当响应异常时做一些处理
    return Promise.resolve(error.response)
  }
)
