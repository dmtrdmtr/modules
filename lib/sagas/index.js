'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSagas = getSagas;

var _effects = require('redux-saga/effects');

var _actions = require('../constants/actions');

var _redux = require('../utils/redux');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getSagas() {
    return [(0, _effects.takeLatest)(_actions.LOGIN, (0, _redux.createRequestGenerator)((0, _redux.createAction)(_actions.LOGIN), function (_ref) {
        var url = _ref.url,
            payload = _ref.payload;
        return function () {
            var code = payload.code,
                username = payload.email,
                password = payload.password;


            return _axios2.default.post(url, { code: code }, { auth: { username: username, password: password } });
        };
    })), (0, _effects.takeLatest)(_actions.SET_PASSWORD, (0, _redux.createRequestGenerator)((0, _redux.createAction)(_actions.SET_PASSWORD), function (_ref2) {
        var url = _ref2.url,
            payload = _ref2.payload;
        return function () {
            return _axios2.default.post(url, payload);
        };
    }))];
}