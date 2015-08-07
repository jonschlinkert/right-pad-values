/*!
 * right-pad-values <https://github.com/jonschlinkert/right-pad-values>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

/* deps:mocha */
var should = require('should');
var pad = require('./');

var arr = [{a: 'b'}, {a: 'bb'}, {a: 'bbbb'}, {a: 'bbb'}, {a: 'bb'}];

describe('right pad values', function () {
  describe('array:', function () {
    it('should right-pad the values for the given property:', function () {
      pad(arr, 'a').should.eql([
        {a: 'b   '},
        {a: 'bb  '},
        {a: 'bbbb'},
        {a: 'bbb '},
        {a: 'bb  '}
      ]);
    });
  });
  describe('object:', function () {
    it('should right-pad the values of an object:', function () {
      pad({a: 'b', c: 'dddddd', e: 'fff', g: 'hhhhh'}).should.eql({
        a: 'b     ',
        c: 'dddddd',
        e: 'fff   ',
        g: 'hhhhh ',
      });
    });
  });

  it('should throw an error when an array is not passed:', function () {
    (function () {
      pad();
    }).should.throw('right-pad-values expects an object or array.');
  });
});
