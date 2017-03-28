import { reducer as form } from 'redux-form';
import { combineReducers } from 'redux';
import login from './loginMeta';

const modules = combineReducers({
    meta: combineReducers({
        login
    })
});

export const rootReducer = {
    form,
    modules
};

export default modules;