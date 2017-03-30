import { combineReducers } from 'redux';

import login from './loginMeta';
import setPassword from './setPasswordMeta';
import recovery from './recoveryMeta';
import passwordConfirm from './passwordConfirmMeta';

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