/*!
 * vve-rjyr-utils 0.0.9 (https://github.com/vue-viewer-editor/vve-rjyr-utils)
 * API https://github.com/vue-viewer-editor/vve-rjyr-utils/blob/master/doc/api.md
 * Copyright 2019-2019 vue-viewer-editor. All Rights Reserved
 * Licensed under MIT (https://github.com/vue-viewer-editor/vve-rjyr-utils/blob/master/LICENSE)
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.vveRjyrUtils = {}));
}(this, function (exports) { 'use strict';

  // plus a + b
  function add(a, b) {
      return a + b;
  }

  exports.add = add;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
