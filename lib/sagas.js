'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSagas = getSagas;

var _effects = require('redux-saga/effects');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _actions = require('./actions');

var _redux = require('./utils/redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getSagas() {
    return [(0, _effects.takeLatest)(_actions.LOGIN, (0, _redux.createRequestGenerator)(_actions.login, function (_ref) {
        var url = _ref.url,
            payload = _ref.payload;
        return function () {
            var code = payload.code,
                username = payload.email,
                password = payload.password;


            return _axios2.default.post(url, { code: code }, { auth: { username: username, password: password } });
        };
    })), (0, _effects.takeLatest)(_actions.SET_PASSWORD, (0, _redux.createRequestGenerator)(_actions.setPassword, function (_ref2) {
        var url = _ref2.url,
            payload = _ref2.payload;
        return function () {
            return _axios2.default.post(url, payload);
        };
    })), (0, _effects.takeLatest)(_actions.SEND_RECOVERY_EMAIL, (0, _redux.createRequestGenerator)(_actions.sendRecoveryEmail, function (_ref3) {
        var url = _ref3.url,
            payload = _ref3.payload;
        return function () {
            return _axios2.default.post(url, payload);
        };
    })), (0, _effects.takeLatest)(_actions.PASSWORD_CONFIRM, (0, _redux.createRequestGenerator)(_actions.passwordConfirm, function (_ref4) {
        var url = _ref4.url,
            payload = _ref4.payload;
        return function () {
            return _axios2.default.post(url, payload);
        };
    }))];
}