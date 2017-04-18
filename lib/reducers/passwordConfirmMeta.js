'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = passwordConfirm;

var _actionHelpers = require('../actionHelpers');

var _actionTypes = require('../actionTypes');

function passwordConfirm() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    var meta = {};
    switch (action.type) {
        case (0, _actionHelpers.toReset)(_actionTypes.PASSWORD_CONFIRM):
            return meta;
        case (0, _actionHelpers.toRequest)(_actionTypes.PASSWORD_CONFIRM):
            meta.pending = true;
            break;
        case (0, _actionHelpers.toSuccess)(_actionTypes.PASSWORD_CONFIRM):
            meta.success = true;
            meta.error = null;
            meta.pending = false;
            break;
        case (0, _actionHelpers.toError)(_actionTypes.PASSWORD_CONFIRM):
            meta.error = action.payload;
            meta.success = false;
            meta.pending = false;
            break;
        default:
            return state;
    }

    return _extends({}, state, meta);
}