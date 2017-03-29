'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendRecoveryEmail = exports.setPassword = exports.login = exports.SEND_RECOVERY_EMAIL = exports.SET_PASSWORD = exports.LOGIN = exports.PREFIX = exports.asReset = exports.asSuccess = exports.asRequest = exports.asError = exports.toReset = exports.toSuccess = exports.toRequest = exports.toError = undefined;

var _redux = require('./utils/redux');

var _evolve = require('ramda/src/evolve');

var _evolve2 = _interopRequireDefault(_evolve);

var _concat = require('ramda/src/concat');

var _concat2 = _interopRequireDefault(_concat);

var _ = require('ramda/src/__');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toError = exports.toError = (0, _concat2.default)(_2.default, '_ERROR');
var toRequest = exports.toRequest = (0, _concat2.default)(_2.default, '_REQUEST');
var toSuccess = exports.toSuccess = (0, _concat2.default)(_2.default, '_SUCCESS');
var toReset = exports.toReset = (0, _concat2.default)(_2.default, '_RESET');

var setStatus = function setStatus(statusFn) {
  return (0, _evolve2.default)({ type: statusFn });
};

var asError = exports.asError = setStatus(toError);
var asRequest = exports.asRequest = setStatus(toRequest);
var asSuccess = exports.asSuccess = setStatus(toSuccess);
var asReset = exports.asReset = setStatus(toReset);

var PREFIX = exports.PREFIX = '@@experium-modules/';

var LOGIN = exports.LOGIN = PREFIX + 'LOGIN';
var SET_PASSWORD = exports.SET_PASSWORD = PREFIX + 'SET_PASSWORD';
var SEND_RECOVERY_EMAIL = exports.SEND_RECOVERY_EMAIL = PREFIX + 'SEND_RECOVERY_EMAIL';

var login = exports.login = (0, _redux.createAction)(LOGIN);
var setPassword = exports.setPassword = (0, _redux.createAction)(SET_PASSWORD);
var sendRecoveryEmail = exports.sendRecoveryEmail = (0, _redux.createAction)(SEND_RECOVERY_EMAIL);