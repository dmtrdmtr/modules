import { SET_PASSWORD, toError, toSuccess, toRequest, toReset } from '../actions';

export default function passwordSetMetaReducer(state = {}, action) {
    let meta = {};

    switch (action.type) {
        case toReset(SET_PASSWORD):
            return meta;
        case toRequest(SET_PASSWORD):
            meta.pending = true;
            break;
        case toSuccess(SET_PASSWORD):
            meta.success = true;
            meta.error = null;
            meta.pending = false;
            break;
        case toError(SET_PASSWORD):
            meta.error = action.payload;
            meta.success = false;
            meta.pending = false;
            break;
        default:
            return state;
    }

    return { ...state, ...meta };
}
