'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = login;

var _actions = require('../actions');

function login() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    var meta = {};
    switch (action.type) {
        case (0, _actions.toReset)(_actions.LOGIN):
            return meta;
        case (0, _actions.toRequest)(_actions.LOGIN):
            meta.pending = true;
            break;
        case (0, _actions.toError)(_actions.LOGIN):
        case (0, _actions.toSuccess)(_actions.LOGIN):
            meta.error = action.payload;
            meta.pending = false;
            break;
        default:
            return state;
    }

    return Object.assign({}, state, meta);
}