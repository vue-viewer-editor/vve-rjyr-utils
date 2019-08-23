/*!
 * nq-tslib-base 0.0.1 (https://github.com/nianqin/nq-tslib-base)
 * API https://github.com/nianqin/nq-tslib-base/blob/master/doc/api.md
 * Copyright 2019-2019 nianqin. All Rights Reserved
 * Licensed under MIT (https://github.com/nianqin/nq-tslib-base/blob/master/LICENSE)
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.nqTslibBase = {}));
}(this, function (exports) { 'use strict';

  // plus a + b
  function add(a, b) {
      return a + b;
  }

  exports.add = add;

  Object.defineProperty(exports, '__esModule', { value: true });

}));