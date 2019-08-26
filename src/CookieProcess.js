var Cookies = require('js-cookie');

//创建一个在整个网站上有效的Cookie
exports.setCookie = function(name, value) {
  Cookies.set(name, value)
}

//读取全部 cookie
exports.getAllCookie = function() {
  return Cookies.get()
}