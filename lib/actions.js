'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passwordConfirm = exports.sendRecoveryEmail = exports.setPassword = exports.login = undefined;

var _actionHelpers = require('./actionHelpers');

var _actionTypes = require('./actionTypes');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var login = exports.login = (0, _actionHelpers.createAction)(types.LOGIN);
var setPassword = exports.setPassword = (0, _actionHelpers.createAction)(types.SET_PASSWORD);
var sendRecoveryEmail = exports.sendRecoveryEmail = (0, _actionHelpers.createAction)(types.SEND_RECOVERY_EMAIL);
var passwordConfirm = exports.passwordConfirm = (0, _actionHelpers.createAction)(types.PASSWORD_CONFIRM);