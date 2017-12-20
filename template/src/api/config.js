import device from '@/common/js/device'
export const commonParams = {
  pageIndex: 1,
  pageSize: 10
}
export function getDeviceTypeUrl() {
  let siteDomainCommon = 'http://wxtest.hx168.com.cn/' // 微信测试
  let baseURL = `${siteDomainCommon}ycf/api/v1.0/`
  if (process.env.NODE_ENV === 'production') {
    if (device.isWeChat()) {
      siteDomainCommon = 'http://wx.hx168.com.cn/' // 微信生产
      baseURL = `${siteDomainCommon}ycf/api/v1.0/`
    }
  }
  return { siteDomainCommon, baseURL }
}

export const baseURL = getDeviceTypeUrl().baseURL
export const resourceURI = 'http://cdn1.hx168.com.cn/ycf/n/'

export function checkStatus(response) {
  if (Array.isArray(response)) {
    return response.map(res => res)
  }
  // 如果http状态码正常，则直接返回数据
  if (
    response &&
    (response.status === 200 ||
      response.status === 304 ||
      response.status === 400)
  ) {
    // 如果不需要除了data之外的数据，可以直接 return response.data
    return response
  }
  // 异常状态下，把错误信息返回去
  return {
    status: response.status,
    msg: '网络异常'
  }
}

export function checkCode(res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  return res
}

export function checkErr(err) {
  // 错误信息，可以弹出一个错误提示，告诉用户
  return err
}
