//检测是否为中文，true表示是中文，false表示非中文
export function wlanCheck(wlan: string): boolean {
  const reg = /.*[\u4e00-\u9fa5]+.*$/
  return !reg.test(wlan)
}