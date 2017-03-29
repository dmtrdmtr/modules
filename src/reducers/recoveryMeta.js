import { SEND_RECOVERY_EMAIL, toError, toSuccess, toRequest, toReset } from '../actions';

export default function recovery(state = {}, action) {
    let meta = {};
    switch (action.type) {
        case toReset(SEND_RECOVERY_EMAIL):
            return meta;
        case toRequest(SEND_RECOVERY_EMAIL):
            meta.pending = true;
            break;
        case toError(SEND_RECOVERY_EMAIL):
        case toSuccess(SEND_RECOVERY_EMAIL):
            meta.error = action.payload;
            meta.pending = false;
            break;
        default:
            return state;
    }

    return { ...state, ...meta };
}