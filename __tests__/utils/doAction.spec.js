import { call } from 'redux-saga/effects';
import axios from 'axios';

import { sendRecoveryEmail } from '../../src/actions';
import { doAction, setActionHandler } from '../../src/utils/doAction';
import { createAction } from '../../src/actionHelpers';

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
});
