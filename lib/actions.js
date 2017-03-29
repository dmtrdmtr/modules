'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendRecoveryEmail = exports.setPassword = exports.login = exports.SEND_RECOVERY_EMAIL = exports.SET_PASSWORD = exports.LOGIN = exports.PREFIX = exports.asReset = exports.asSuccess = exports.asRequest = exports.asError = exports.toReset = exports.toSuccess = exports.toRequest = exports.toError = undefined;

var _redux = require('utils/redux');

var _evolve = require('ramda/src/evolve');

var _evolve2 = _interopRequireDefault(_evolve);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toError = exports.toError = function toError(action) {
  return action + '_ERROR';
};
var toRequest = exports.toRequest = function toRequest(action) {
  return action + '_REQUEST';
};
var toSuccess = exports.toSuccess = function toSuccess(action) {
  return action + '_SUCCESS';
};
var toReset = exports.toReset = function toReset(action) {
  return action + '_RESET';
};

var setStatus = function setStatus(statusFn) {
  return (0, _evolve2.default)({ type: statusFn });
};

var asError = exports.asError = setStatus(toError);
var asRequest = exports.asRequest = setStatus(toRequest);
var asSuccess = exports.asSuccess = setStatus(toSuccess);
var asReset = exports.asReset = setStatus(toSuccess);

var PREFIX = exports.PREFIX = '@@experium-modules/';

var LOGIN = exports.LOGIN = PREFIX + 'LOGIN';
var SET_PASSWORD = exports.SET_PASSWORD = PREFIX + 'SET_PASSWORD';
var SEND_RECOVERY_EMAIL = exports.SEND_RECOVERY_EMAIL = PREFIX + 'SEND_RECOVERY_EMAIL';

var login = exports.login = (0, _redux.createAction)(LOGIN);
var setPassword = exports.setPassword = (0, _redux.createAction)(SET_PASSWORD);
var sendRecoveryEmail = exports.sendRecoveryEmail = (0, _redux.createAction)(SEND_RECOVERY_EMAIL);