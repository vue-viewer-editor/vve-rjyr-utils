export function macCheck(mac: string): boolean {
  const reg = /^([A-Fa-f0-9]{2}-){5}[A-Fa-f0-9]{2}$/
  return reg.test(mac)
}