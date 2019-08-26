/*!
 * vve-rjyr-utils 0.0.9 (https://github.com/vue-viewer-editor/vve-rjyr-utils)
 * API https://github.com/vue-viewer-editor/vve-rjyr-utils/blob/master/doc/api.md
 * Copyright 2019-2019 vue-viewer-editor. All Rights Reserved
 * Licensed under MIT (https://github.com/vue-viewer-editor/vve-rjyr-utils/blob/master/LICENSE)
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('js-cookie')) :
  typeof define === 'function' && define.amd ? define(['exports', 'js-cookie'], factory) :
  (global = global || self, factory(global.vveRjyrUtils = {}, global.Cookies));
}(this, function (exports, Cookies) { 'use strict';

  Cookies = Cookies && Cookies.hasOwnProperty('default') ? Cookies['default'] : Cookies;

  function ipCheck(ip) {
      var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
      return reg.test(ip);
  }

  function macCheck(mac) {
      var reg = /^([A-Fa-f0-9]{2}-){5}[A-Fa-f0-9]{2}$/;
      return reg.test(mac);
  }

  function maskCheck(mask) {
      var reg = /^(254|252|248|240|224|192|128|0)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(254|252|248|240|224|192|128|0)$/;
      return reg.test(mask);
  }

  //检测是否为中文，true表示是中文，false表示非中文
  function wlanCheck(wlan) {
      var reg = /.*[\u4e00-\u9fa5]+.*$/;
      return !reg.test(wlan);
  }

  //创建一个在整个网站上有效的Cookie
  function setCookie(name, value, obj) {
      Cookies.set(name, value, obj);
  }
  //读取cookie
  function getCookie(name) {
      return Cookies.get(name);
  }
  //删除cookie
  function removeCookie(name) {
      Cookies.remove(name);
  }

  exports.getCookie = getCookie;
  exports.ipCheck = ipCheck;
  exports.macCheck = macCheck;
  exports.maskCheck = maskCheck;
  exports.removeCookie = removeCookie;
  exports.setCookie = setCookie;
  exports.wlanCheck = wlanCheck;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
