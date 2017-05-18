import axios from 'axios';
import { LOGIN, SEND_RECOVERY_EMAIL, PASSWORD_CONFIRM } from '../actionTypes';

import { call } from 'redux-saga/effects';

const handlers = {
    [LOGIN]: function*({attrs, payload}) {
        const {code, email: username, password} = payload;
        return yield call(axios.post, attrs.url, { code }, { auth: {username, password} });
    },
    [SEND_RECOVERY_EMAIL]: function*({attrs, payload}) {
        return yield call(axios.post, attrs.url, payload);
    },
    [PASSWORD_CONFIRM]: function*({attrs, payload}) {
        return yield call(axios.post, attrs.url, payload);
    }
};

const reject = action => {
    throw Error({
        reason: `There is no handler for ${action.type}`,
        action
    });
};

const setGeneratorActionHandler = (type, handler) => {
    handlers[type] = handler;
};

export const doAction = function*(action) {
    const handler = handlers[action.type] || reject;
    return yield* handler(action);
};

export const setActionHandler = (type, handler) => {
    setGeneratorActionHandler(type, function*(action) {
        return yield call(handler, action);
    });
};
