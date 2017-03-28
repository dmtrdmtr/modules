import { SET_PASSWORD } from '../constants/actions';
import {errorType, successType, requestType} from '../utils/redux';

export default function passwordSetMetaReducer(state = {}, action) {
    let meta = {};

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

    return { ...state, ...meta };
}