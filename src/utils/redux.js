import {put, call} from 'redux-saga/effects';
import {asRequest, asError, asSuccess} from '../actions';

import compose from 'ramda/src/compose';
import merge from 'ramda/src/merge';
import omit from 'ramda/src/omit';

export const createAction = (type, staticPayload) => (payload = null) => {
    return {
        type,
        payload: staticPayload || payload
    };
};

export function createRequestGenerator(actionFn, provideCallFn) {
    return function* httpRequestGenerator(action) {
        actionFn = compose(
            merge(omit(['type', 'payload'], action)),
            actionFn
        );

        try {
            yield put( asRequest(actionFn(null)) );
            const response = yield call(provideCallFn(action));
            yield put( asSuccess(actionFn(response)) );
            return { response };
        } catch(error) {
            yield put( asError(actionFn(error)) );
            return { error };
        }
    }
}
