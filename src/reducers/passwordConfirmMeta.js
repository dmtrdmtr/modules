import { PASSWORD_CONFIRM, toError, toSuccess, toRequest, toReset } from '../actions';

export default function passwordConfirm(state = {}, action) {
    let meta = {};
    switch (action.type) {
        case toReset(PASSWORD_CONFIRM):
            return meta;
        case toRequest(PASSWORD_CONFIRM):
            meta.pending = true;
            break;
        case toError(PASSWORD_CONFIRM):
        case toSuccess(PASSWORD_CONFIRM):
            meta.error = action.payload;
            meta.pending = false;
            break;
        default:
            return state;
    }

    return { ...state, ...meta };
}