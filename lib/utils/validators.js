'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.password = exports.email = exports.required = undefined;

var _not = require('ramda/src/not');

var _not2 = _interopRequireDefault(_not);

var _always = require('ramda/src/always');

var _always2 = _interopRequireDefault(_always);

var _complement = require('ramda/src/complement');

var _complement2 = _interopRequireDefault(_complement);

var _either = require('ramda/src/either');

var _either2 = _interopRequireDefault(_either);

var _gt = require('ramda/src/gt');

var _gt2 = _interopRequireDefault(_gt);

var _lt = require('ramda/src/lt');

var _lt2 = _interopRequireDefault(_lt);

var _length = require('ramda/src/length');

var _length2 = _interopRequireDefault(_length);

var _compose = require('ramda/src/compose');

var _compose2 = _interopRequireDefault(_compose);

var _test = require('ramda/src/test');

var _test2 = _interopRequireDefault(_test);

var _patterns = require('../constants/patterns');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var required = exports.required = [_not2.default, (0, _always2.default)('required')];
var email = exports.email = [(0, _complement2.default)((0, _test2.default)(_patterns.EMAIL)), (0, _always2.default)('email')];

var passOutOfRange = (0, _either2.default)((0, _gt2.default)(6), (0, _lt2.default)(15));
var password = exports.password = [(0, _compose2.default)(passOutOfRange, _length2.default), (0, _always2.default)('password')];