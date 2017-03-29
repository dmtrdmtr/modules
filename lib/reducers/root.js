'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getReducers = getReducers;

var _redux = require('redux');

var _loginMeta = require('./loginMeta');

var _loginMeta2 = _interopRequireDefault(_loginMeta);

var _setPasswordMeta = require('./setPasswordMeta');

var _setPasswordMeta2 = _interopRequireDefault(_setPasswordMeta);

var _recoveryMeta = require('./recoveryMeta');

var _recoveryMeta2 = _interopRequireDefault(_recoveryMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getReducers() {
    return {
        modules: (0, _redux.combineReducers)({
            meta: (0, _redux.combineReducers)({
                login: _loginMeta2.default,
                setPassword: _setPasswordMeta2.default,
                recoveryMeta: _recoveryMeta2.default
            })
        })
    };
}