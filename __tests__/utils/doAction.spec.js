import { call } from 'redux-saga/effects';
import axios from 'axios';

import { sendRecoveryEmail } from '../../src/actions';
import { doAction, setActionHandler } from '../../src/utils/doAction';
import { createAction } from '../../src/actionHelpers';
import { LOGIN, PASSWORD_CONFIRM } from '../../src/actionTypes';

describe('doAction', () => {
    it('doAction (sendRecoveryEmail action)', () => {
        const url = '/test';
        const payload = {};
        const action = sendRecoveryEmail(payload, { url });

        expect(doAction(action).next().value).toEqual(call(axios.post, url, payload));
    });

    it('setActionHandler', () => {
        const type = 'USER_ACTION';
        const handler = ({ attrs, payload }) => axios.get('aaa', payload);
        const action = createAction(type)({}, { url: 'test2' });

        setActionHandler(type, handler);
        expect(doAction(action).next().value).toEqual(call(handler, action));
    });

    it('encode password with unicode symbols on login action', () => {
        const type = LOGIN;
        const url = '/login';

        const email = 'foobar@google.com';
        const password = 'РусскийПΛроль';
        const encodedPassword = unescape(encodeURIComponent(password));
        const auth = { username: email, password: encodedPassword };

        const action = createAction(type)({ email, password }, { url });

        expect(doAction(action).next().value)
            .toEqual(call(axios.post, url, { code: undefined }, { auth }));
    });

    it('encode password with unicode symbols on password confirm action', () => {
        const type = PASSWORD_CONFIRM;
        const url = '/password-set';

        const login = 'foobar@google.com';
        const password = 'РусскийПΛроль';
        const encodedPassword = unescape(encodeURIComponent(password));
        const expectedPayload = { login, password: encodedPassword };

        const action = createAction(type)({ login, password }, { url });

        expect(doAction(action).next().value)
            .toEqual(call(axios.post, url, expectedPayload));
    });
});
