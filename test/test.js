var expect = require('expect.js');
require('jsdom-global')() // for cookie

// ts 测试编译后文件
var {macCheck, ipCheck, maskCheck, wlanCheck, setCookie, getCookie, removeCookie} = require('../src/index.ts');

describe('单元测试', function () {
  //mac
  describe('测试 mac 地址是否合法', function () {
    it('mac 地址正确', function () {
      expect(macCheck('54-BF-64-5C-E8-5F')).to.equal(true)
    })
    it('mac 地址错误', function () {
      expect(macCheck('54-BF-64-5C')).to.equal(false)
    })
    it('mac 地址错误', function () {
      expect(macCheck('54-BF-64-5C')).to.equal(false)
    })
  })
  //ip
  describe('测试 ip 地址是否合法', function () {
    it('ip 地址正确', function () {
      expect(ipCheck('172.30.81.82')).to.equal(true)
    })
    it('ip 地址错误', function () {
      expect(ipCheck('256.0.0.0')).to.equal(false)
    })
  })
  //掩码
  describe('测试掩码是否合法', function () {
    it('掩码正确', function () {
      expect(maskCheck('255.255.255.0')).to.equal(true)
    })
    it('掩码错误', function () {
      expect(maskCheck('256.0.0.0')).to.equal(false)
    })
  })
  //wlan 是否含有中文
  describe('测试 wlan 是否含有中文', function () {
    it('不含中文', function () {
      expect(wlanCheck('ruijie')).to.equal(true)
    })
    it('含中文', function () {
      expect(wlanCheck('锐捷ruijie123')).to.equal(false)
    })
  });
  // 测试 cookie
  describe('测试 cookie', function () {
    it(' 设置cookie ', function () {
      setCookie('name', 'cookie')
      expect(getCookie('name')).to.equal('cookie')
    })
    it(' 设置cookie ', function () {
      setCookie('name2', 'cookie2')
      expect(getCookie('name2')).to.equal('cookie2')
    })
    it('获取全部 cookie ', function() {
      expect(JSON.stringify(getCookie())).to.equal(JSON.stringify({name: "cookie", name2: "cookie2"}))
    })
    it('删除 cookie ', function() {
      removeCookie('name2')
      expect(JSON.stringify(getCookie())).to.equal(JSON.stringify({name: "cookie"}))
    })
  })
})