import { SET_PASSWORD, toError, toSuccess, toRequest, toReset } from '../actions';

export default function passwordSetMetaReducer(state = {}, action) {
    let meta = {};

    switch (action.type) {
        case toReset(SET_PASSWORD):
            meta.error = null;
            break;
        case toRequest(SET_PASSWORD):
            meta.pending = true;
            break;
        case toError(SET_PASSWORD):
        case toSuccess(SET_PASSWORD):
            meta.error = action.payload;
            meta.pending = false;
            break;
        default:
            return state;
    }

    return { ...state, ...meta };
}