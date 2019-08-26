var expect = require('expect.js');

// ts 测试编译后文件
var base = require('../src/index.ts');
var MacCheck = require('../src/MacCheck.ts')
var IpCheck = require('../src/IpCheck.ts')
var MaskCheck = require('../src/MaskCheck.ts')
var WlanCheck = require('../src/WlanCheck.ts')
var CookieProcess = require('../src/CookieProcess.js')

describe('单元测试', function () {
  this.timeout(1000);

  describe('功能1', function () {
    it('相等', function () {
      expect(base.add(1, 1)).to.equal(2);
    });
  });
  //mac
  describe('测试 mac 地址是否合法', function () {
    it('mac 地址正确', function () {
      expect(MacCheck.macCheck('54-BF-64-5C-E8-5F')).to.equal(true)
    });
    it('mac 地址错误', function () {
      expect(MacCheck.macCheck('54-BF-64-5C')).to.equal(false)
    });
    it('mac 地址错误', function () {
      expect(MacCheck.macCheck('54-BF-64-5C')).to.equal(false)
    });
  });
  //ip
  describe('测试 ip 地址是否合法', function () {
    it('ip 地址正确', function () {
      expect(IpCheck.ipCheck('172.30.81.82')).to.equal(true)
    });
    it('ip 地址错误', function () {
      expect(IpCheck.ipCheck('256.0.0.0')).to.equal(false)
    });
  });
  //掩码
  describe('测试掩码是否合法', function () {
    it('掩码正确', function () {
      expect(MaskCheck.maskCheck('255.255.255.0')).to.equal(true)
    });
    it('掩码错误', function () {
      expect(MaskCheck.maskCheck('256.0.0.0')).to.equal(false)
    });
  });
  //wlan 是否含有中文
  describe('测试 wlan 是否含有中文', function () {
    it('不含中文', function () {
      expect(WlanCheck.wlanCheck('ruijie')).to.equal(false)
    });
    it('含中文', function () {
      expect(WlanCheck.wlanCheck('锐捷ruijie123')).to.equal(true)
    });
  });
});

CookieProcess.setCookie('name', 'value')
CookieProcess.setCookie('name2', 'value2')
CookieProcess.setCookie('name3', 'value3')
CookieProcess.setCookie('name4', 'value4')

console.log('cookie----------', CookieProcess.getAllCookie())