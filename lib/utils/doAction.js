'use strict';

exports.__esModule = true;
exports.setActionHandler = exports.doAction = undefined;

var _handlers;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _actionTypes = require('../actionTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var handlers = (_handlers = {}, _defineProperty(_handlers, _actionTypes.LOGIN, function (_ref) {
    var attrs = _ref.attrs,
        payload = _ref.payload;
    var code = payload.code,
        username = payload.email,
        password = payload.password;


    return _axios2.default.post(attrs.url, { code: code }, { auth: { username: username, password: password } });
}), _defineProperty(_handlers, _actionTypes.SET_PASSWORD, function (_ref2) {
    var attrs = _ref2.attrs,
        payload = _ref2.payload;

    return _axios2.default.post(attrs.url, payload);
}), _defineProperty(_handlers, _actionTypes.SEND_RECOVERY_EMAIL, function (_ref3) {
    var attrs = _ref3.attrs,
        payload = _ref3.payload;

    return _axios2.default.post(attrs.url, payload);
}), _defineProperty(_handlers, _actionTypes.PASSWORD_CONFIRM, function (_ref4) {
    var attrs = _ref4.attrs,
        payload = _ref4.payload;

    return _axios2.default.post(attrs.url, payload);
}), _handlers);

var reject = function reject(action) {
    return Promise.reject({
        reason: 'There is no handler for ' + action.type,
        action: action
    });
};

var doAction = exports.doAction = function doAction(action) {
    return function () {
        var handler = handlers[action.type] || reject;
        return handler(action);
    };
};

var setActionHandler = exports.setActionHandler = function setActionHandler(type, handler) {
    handlers[type] = handler;
};