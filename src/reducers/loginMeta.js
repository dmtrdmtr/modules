import { LOGIN } from '../constants/actions';
import {errorType, successType, requestType} from '../utils/redux';

export default function login(state = null, action) {
    let meta = {};
    switch (action.type) {
        case requestType(LOGIN):
            meta.pending = true;
            break;
        case errorType(LOGIN):
        case successType(LOGIN):
            meta.error = action.payload;
            meta.pending = false;
            break;
        default:
            return state;
    }

    return { ...state, ...meta };
}