'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSagas = getSagas;

var _loginSaga = require('./loginSaga');

var _loginSaga2 = _interopRequireDefault(_loginSaga);

var _setPasswordSaga = require('./setPasswordSaga');

var _setPasswordSaga2 = _interopRequireDefault(_setPasswordSaga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getSagas() {
    return [_loginSaga2.default, _setPasswordSaga2.default];
}