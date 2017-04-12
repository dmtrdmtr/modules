'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSagas = getSagas;

var _effects = require('redux-saga/effects');

var _actions = require('./actions');

var _actionTypes = require('./actionTypes');

var _redux = require('./utils/redux');

function getSagas() {
    return [(0, _effects.takeLatest)(_actionTypes.LOGIN, _redux.requestGenerator, _actions.login), (0, _effects.takeLatest)(_actionTypes.SET_PASSWORD, _redux.requestGenerator, _actions.setPassword), (0, _effects.takeLatest)(_actionTypes.SEND_RECOVERY_EMAIL, _redux.requestGenerator, _actions.sendRecoveryEmail), (0, _effects.takeLatest)(_actionTypes.PASSWORD_CONFIRM, _redux.requestGenerator, _actions.passwordConfirm)];
}