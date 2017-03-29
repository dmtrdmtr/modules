var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { SET_PASSWORD } from '../constants/actions';
import { errorType, successType, requestType } from '../utils/redux';

export default function passwordSetMetaReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    var meta = {};

    switch (action.type) {
        case requestType(SET_PASSWORD):
            meta.pending = true;
            break;
        case errorType(SET_PASSWORD):
        case successType(SET_PASSWORD):
            meta.error = action.payload;
            meta.pending = false;
            break;
        default:
            return state;
    }

    return _extends({}, state, meta);
}