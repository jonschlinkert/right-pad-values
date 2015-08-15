/*!
 * right-pad-values <https://github.com/jonschlinkert/right-pad-values>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var longest = require('longest-value');
var pad = require('pad-right');

module.exports = function rightPadValues(obj, prop) {
  if (typeof obj !== 'object') {
    throw new TypeError('right-pad-values expects an object or array.');
  }

  if (Array.isArray(obj)) {
    return arrayValues(obj, prop);
  }
  return objectValues(obj);
};

function arrayValues(arr, prop) {
  var max = longest(arr, prop).length;
  var len = arr.length;
  var res = new Array(len);

  while (len--) {
    var ele = arr[len];
    var val = ele[prop].toString();
    ele[prop] = pad(val, max, ' ');
    res[len] = ele;
  }
  return res;
}

function objectValues(obj) {
  var max = longest(obj).length;
  var res = {};

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      var val = obj[key];
      res[key] = pad(val, max, ' ');
    }
  }
  return res;
}
