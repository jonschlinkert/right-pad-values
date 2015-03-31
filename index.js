/*!
 * right-pad-values <https://github.com/jonschlinkert/right-pad-values>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var longest = require('longest-value');
var pad = require('pad-right');

module.exports = function rightPadValues(arr, prop) {
  if (!Array.isArray(arr)) {
    throw new TypeError('right-pad-values expects an array.');
  }
  if (typeof prop !== 'string') {
    throw new TypeError('right-pad-values expects property to be a string.');
  }

  var max = longest(arr, prop).length;
  var len = arr.length;
  var res = new Array(len);

  while (len--) {
    var ele = arr[len];
    var val = ele[prop];
    var diff = max - val.length;
    ele[prop] = pad(val, diff, ' ');
    res[len] = ele;
  }
  return res;
};
