// 校验输入是否含特殊字符
export function haveSpecialChars(input) {
  return new RegExp(
    "[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%+]"
  ).test(input)
}

// 校验邮箱是否含特殊字符
export function isNormalEmail(email) {
  return !new RegExp(
    "[`~!#$^&*()=|{}':;',\\[\\]<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？%+]"
  ).test(email)
}

// 校验邮箱
export function validateEmail(email) {
  return /^[\w\\.\\_\\-]+@[\w\\.\\_\\-]+\.[a-zA-Z]{2,10}$/.test(email)
}

// 校验手机号
export function validateMobile(mobile) {
  return /^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(mobile)
}

// 校验密码格式
export function validatePassword(pwd) {
  return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/.test(pwd)
}

// 是否全是数字
export function validateNumber(numStr) {
  if (numStr === '') return false
  return /^[0-9]*$/.test(numStr)
}
