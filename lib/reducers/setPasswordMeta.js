'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
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
        case (0, _actions.toError)(_actions.SET_PASSWORD):
        case (0, _actions.toSuccess)(_actions.SET_PASSWORD):
            meta.error = action.payload;
            meta.pending = false;
            break;
        default:
            return state;
    }

    return Object.assign({}, state, meta);
}