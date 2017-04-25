import { combineReducers } from 'redux';
import { createMetaReducer } from './createMetaReducer';
import { LOGIN, SET_PASSWORD, SEND_RECOVERY_EMAIL, PASSWORD_CONFIRM } from './actionTypes';

const login = createMetaReducer({ post: LOGIN });
const setPassword = createMetaReducer({ post: SET_PASSWORD });
const recovery = createMetaReducer({ post: SEND_RECOVERY_EMAIL });
const passwordConfirm = createMetaReducer({ post: PASSWORD_CONFIRM });

export function getReducers() {
    return {
        modules: combineReducers({
            meta: combineReducers({
                login,
                setPassword,
                recovery,
                passwordConfirm
            })
        })
    }
}
