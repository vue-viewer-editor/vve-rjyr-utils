export function macCheck(mac: string): boolean {
  let reg = /^([A-Fa-f0-9]{2}-){5}[A-Fa-f0-9]{2}$/
  if(!reg.test(mac)){
    return false
  }else{
    return true
  }
}