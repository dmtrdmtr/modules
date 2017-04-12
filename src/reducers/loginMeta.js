import {toError, toSuccess, toRequest, toReset } from '../actionHelpers';
import {LOGIN} from '../actionTypes';

export default function login(state = {}, action) {
    let meta = {};
    switch (action.type) {
        case toReset(LOGIN):
            return meta;
        case toRequest(LOGIN):
            meta.pending = true;
            break;
        case toSuccess(LOGIN):
            meta.success = true;
            meta.error = null;
            meta.pending = false;
            break;
        case toError(LOGIN):
            meta.error = action.payload;
            meta.success = false;
            meta.pending = false;
            break;
        default:
            return state;
    }

    return { ...state, ...meta };
}
