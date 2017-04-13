import { put, call } from 'redux-saga/effects';
import { asRequest, asError, asSuccess } from '../actionHelpers';

import compose from 'ramda/src/compose';
import merge from 'ramda/src/merge';

import { doAction } from './doAction';

export function* requestGenerator(actionFn, action) {
    actionFn = compose(
        merge({requestAction: action}),
        actionFn
    );

    try {
        yield put( asRequest(actionFn(null)) );
        const response = yield call(doAction(action));
        yield put( asSuccess(actionFn(response)) );
        return { response };
    } catch(error) {
        yield put( asError(actionFn(error)) );
        return { error };
    }
}
