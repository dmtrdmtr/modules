'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = login;

var _actions = require('../constants/actions');

var _redux = require('../utils/redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function login() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    var meta = {};
    switch (action.type) {
        case (0, _redux.requestType)(_actions.LOGIN):
            meta.pending = true;
            break;
        case (0, _redux.errorType)(_actions.LOGIN):
        case (0, _redux.successType)(_actions.LOGIN):
            meta.error = action.payload;
            meta.pending = false;
            break;
        default:
            return state;
    }

    return (0, _extends3.default)({}, state, meta);
}