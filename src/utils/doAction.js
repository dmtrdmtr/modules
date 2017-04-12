import axios from 'axios';
import {LOGIN, SET_PASSWORD, SEND_RECOVERY_EMAIL, PASSWORD_CONFIRM} from '../actionTypes';

const handlers = {
    [LOGIN]: ({attrs, payload}) => {
        const {code, email: username, password} = payload;

        return axios.post(attrs.url, { code }, { auth: {username, password} })
    },
    [SET_PASSWORD]: ({attrs, payload}) => {
        return axios.post(attrs.url, payload)
    },
    [SEND_RECOVERY_EMAIL]: ({attrs, payload}) => {
        return axios.post(attrs.url, payload)
    },
    [PASSWORD_CONFIRM]: ({attrs, payload}) => {
        return axios.post(attrs.url, payload)
    }
};

const reject = (action) => Promise.reject({
    reason: `There is no handler for ${action.type}`,
    action
});

export const doAction = (action) => () => {
    const handler = handlers[action.type] || reject;
    return handler(action);
};

export const setActionHandler = (type, handler) => {
    handlers[type] = handler;
};