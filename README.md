# right-pad-values [![NPM version](https://badge.fury.io/js/right-pad-values.svg)](http://badge.fury.io/js/right-pad-values)  [![Build Status](https://travis-ci.org/jonschlinkert/right-pad-values.svg)](https://travis-ci.org/jonschlinkert/right-pad-values) 

> Right pad the values of a given property for each object in an array. Useful for creating text columns or tables.

## Install with [npm](npmjs.org)

```bash
npm i right-pad-values --save
```

## Usage

```js
var align = require('right-pad-values');

var arr = [{a: 'b'}, {a: 'bb'}, {a: 'bbbb'}, {a: 'bbb'}, {a: 'bb'}];
align(arr, 'a');
```

Results in:

```js
[
  {a: '   b'},
  {a: '  bb'},
  {a: 'bbbb'},
  {a: ' bbb'},
  {a: '  bb'}
];
```

## Related projects
 * [right-align-values](https://github.com/jonschlinkert/right-align-values): Right align the values of a given property for each object in an array. Useful for creating text columns or tables.
 * [longest](https://github.com/jonschlinkert/longest): Get the longest item in an array.
 * [longest-value](https://github.com/jonschlinkert/longest-value): Get the longest value for the given property from an array of objects. Useful for aligning values.
 * [repeat-string](https://github.com/jonschlinkert/repeat-string): Repeat the given string n times. Fastest implementation for repeating a string.
 * [pad-left](https://github.com/jonschlinkert/pad-left): Left pad a string with zeros or a specified string. Fastest implementation.
 * [pad-right](https://github.com/jonschlinkert/pad-right): Right pad a string with zeros or a specified string. Fastest implementation.  

## Running tests
Install dev dependencies:

```bash
npm i -d && npm test
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/right-pad-values/issues)

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2015 Jon Schlinkert  
Released under the MIT license

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on March 31, 2015._
