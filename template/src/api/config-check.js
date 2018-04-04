/**
 * 处理来自网络或者服务器的错误
 */
export function checkStatus(response) {
  if (Array.isArray(response)) {
    return response.map(res => res);
  }
  if (response && Object.keys(response.data).length) {
    // 走http: response.data
    return response.data;
  }
  if (response && response.message) {
    return response;
  }
  // 异常状态下，把错误信息返回去
  return {
    error: true,
    msg: '服务器连接失败，请稍后再试！',
    message: '服务器连接失败，请稍后再试！'
  };
}

/**
 * 处理来自状态 code 异常的错误
 */
export function checkCode(res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.error) {
    console.err(res.message)
  }
  switch (res.status) {
    case 401:
      alert(res.status);
      break;
    case 422:
      alert(res.status);
      break;
    case 503:
      alert(res.status);
      break;
  }
  return res;
}

/**
 * 处理来自程序端的错误
 */
export function checkErr(err) {
  // 错误信息，可以弹出一个错误提示，告诉用户
  alert('服务器错误,网络异常');
  return err;
}
