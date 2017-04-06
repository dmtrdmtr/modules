'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = passwordSetMetaReducer;

var _actions = require('../actions');

function passwordSetMetaReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    var meta = {};

    switch (action.type) {
        case (0, _actions.toReset)(_actions.SET_PASSWORD):
            return meta;
        case (0, _actions.toRequest)(_actions.SET_PASSWORD):
            meta.pending = true;
            break;
        case (0, _actions.toSuccess)(_actions.SET_PASSWORD):
            meta.success = true;
            meta.error = null;
            meta.pending = false;
            break;
        case (0, _actions.toError)(_actions.SET_PASSWORD):
            meta.error = action.payload;
            meta.success = false;
            meta.pending = false;
            break;
        default:
            return state;
    }

    return _extends({}, state, meta);
}