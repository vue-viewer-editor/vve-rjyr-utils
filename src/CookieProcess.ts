const Cookies = require('js-cookie')

//创建一个在整个网站上有效的Cookie
export function setCookie(name: string, value: string): void {
  Cookies.set(name, value)
}

//创建一个从现在起7天后过期的cookie，在整个站点上有效
export function setEffectiveCookie(name: string, value: string): void {
  Cookies.set(name, value, { expires: 7 })
}

//读取cookie
export function getCookie(name: string): string {
  return Cookies.get(name)
}

//读取全部 cookie
export function getAllCookie(): string {
  return Cookies.get()
}
