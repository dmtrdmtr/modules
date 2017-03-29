import { combineReducers } from 'redux';

import login from './loginMeta';
import setPassword from './setPasswordMeta';

export function getReducers() {
    return {
        modules: combineReducers({
            meta: combineReducers({
                login: login,
                setPassword: setPassword
            })
        })
    };
}