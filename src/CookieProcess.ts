import Cookies from 'js-cookie'

//创建一个在整个网站上有效的Cookie
export function setCookie(name: string, value: string, obj?: object): void {
  Cookies.set(name, value, obj)
}

//读取cookie
export function getCookie(name?: string): object {
  if(name) {
    return Cookies.get(name)
  } else {
    return Cookies.get()
  }
}

//删除cookie
export function removeCookie(name: string): void {
  Cookies.remove(name)
}