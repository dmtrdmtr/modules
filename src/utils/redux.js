import R from 'ramda';
import {put, call} from 'redux-saga/effects';
import pipe from 'ramda/src/pipe';
import curry from 'ramda/src/curry';
import evolve from 'ramda/src/evolve';

export const createAction = R.curryN(2, (type, payload = null) => ({ type, payload }));

export const createCustomAction = curry((type, transformers) => pipe(createAction(type), ...transformers));

export const errorType = action => `${action}_ERROR`;
export const requestType = action => `${action}_REQUEST`;
export const successType = action => `${action}_SUCCESS`;

const setStatus = statusFn => evolve({ type: statusFn });

export function createRequestGenerator(actionFn, provideCallFn) {

    return function* httpRequestGenerator(action) {
        try {
            const requestAction = setStatus(requestType)(actionFn(null));
            yield put(requestAction);
            const response = yield call(provideCallFn(action));

            const successAction = setStatus(successType)(actionFn(response));
            yield put(successAction);
            return { response };
        } catch(error) {
            const errorAction = setStatus(errorType)(actionFn(error));
            yield put(errorAction);
            return { error };
        }
    }
}
