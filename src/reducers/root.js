import { combineReducers } from 'redux';

import login from './loginMeta';
import setPassword from './setPasswordMeta';
import recoveryMeta from './recoveryMeta'

export function getReducers() {
    return {
        modules: combineReducers({
            meta: combineReducers({
                login,
                setPassword,
                recoveryMeta
            })
        })
    }
}