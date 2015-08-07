/*!
 * right-pad-values <https://github.com/jonschlinkert/right-pad-values>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var longest = require('longest-value');

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
    ele[prop] = val + pad(val.length, max);
    res[len] = ele;
  }
  return res;
}

function objectValues(obj) {
  var max = longest(obj).length;
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      var val = obj[key];
      obj[key] = val + pad(val.length, max);
    }
  }
  return obj;
}

function pad(len, max) {
  return Array(max - len + 1).join(' ');
}
