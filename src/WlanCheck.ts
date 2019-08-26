//检测是否为中文，true表示是中文，false表示非中文
export function wlanCheck(wlan: string): boolean {
  let reg = /.*[\u4e00-\u9fa5]+.*$/
  if(!reg.test(wlan)){
    return false
  }else{
    return true
  }
}