/*
  手机号码格式验证
====================================================
*/
function phoneValidator(phone) {
  if (!phone) {
    return false
  }
  const regexp = /^(13[0-9]|147|15[0-9]|17[0-9]|18[0-9])\d{8}$/
  return regexp.test(phone)
}
/*
*资金账户格式验证
====================================================
*/
function accountValidator(account) {
  if (!account) {
    return false
  }
  const regexp = /^\d+$/
  return regexp.test(account)
}

/*
图片验证码格式验证
====================================================
*/
function captchaValidator(captcha) {
  if (!captcha) {
    return false
  }
  const regexp = /^[A-Za-z0-9]{4}$/
  return regexp.test(captcha)
}

/*
短信验证码格式验证
====================================================
*/
function smsCaptchaValidator(captcha) {
  if (!captcha) {
    return false
  }
  const regexp = /^[0-9]{6}$/
  return regexp.test(captcha)
}

/*
密码格式验证
====================================================
*/
function passwordValidator(password) {
  if (!password) {
    return false
  }
  const regexp = /^[A-Za-z0-9]{6,16}$/
  return regexp.test(password)
}

export default {
  phoneValidator,
  accountValidator,
  captchaValidator,
  smsCaptchaValidator,
  passwordValidator
}
