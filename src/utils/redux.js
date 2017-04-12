import { put, call } from 'redux-saga/effects';
import { asRequest, asError, asSuccess } from '../actionHelpers';

import compose from 'ramda/src/compose';
import merge from 'ramda/src/merge';
import omit from 'ramda/src/omit';

import { doAction } from './doAction';

export function* requestGenerator(actionFn, action) {
    const composedActionFn = compose(
        merge(omit(['type', 'payload'], action)),
        actionFn
    );

    try {
        yield put( asRequest(composedActionFn(null)) );
        const response = yield call(doAction(action));
        yield put( asSuccess(composedActionFn(response)) );
        return { response };
    } catch(error) {
        yield put( asError(composedActionFn(error)) );
        return { error };
    }
}
