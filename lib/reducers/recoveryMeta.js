'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = recovery;

var _actions = require('../actions');

function recovery() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    var meta = {};
    switch (action.type) {
        case (0, _actions.toReset)(_actions.SEND_RECOVERY_EMAIL):
            return meta;
        case (0, _actions.toRequest)(_actions.SEND_RECOVERY_EMAIL):
            meta.pending = true;
            break;
        case (0, _actions.toError)(_actions.SEND_RECOVERY_EMAIL):
        case (0, _actions.toSuccess)(_actions.SEND_RECOVERY_EMAIL):
            meta.error = action.payload;
            meta.pending = false;
            break;
        default:
            return state;
    }

    return Object.assign({}, state, meta);
}