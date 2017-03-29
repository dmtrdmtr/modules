import _extends from 'babel-runtime/helpers/extends';
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