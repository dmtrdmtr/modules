import { reducer as form } from 'redux-form';
import { combineReducers } from 'redux';

import login from './loginMeta';
import setPassword from './setPasswordMeta';

const modules = combineReducers({
    meta: combineReducers({
        login,
        setPassword
    })
});

export const rootReducer = {
    form,
    modules
};

export default modules;