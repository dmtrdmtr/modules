import { LOGIN, toError, toSuccess, toRequest, toReset } from '../actions';

export default function login(state = {}, action) {
    let meta = {};
    switch (action.type) {
        case toReset(LOGIN):
            return meta;
        case toRequest(LOGIN):
            meta.pending = true;
            break;
        case toError(LOGIN):
        case toSuccess(LOGIN):
            meta.error = action.payload;
            meta.pending = false;
            break;
        default:
            return state;
    }

    return { ...state, ...meta };
}