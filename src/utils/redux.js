import {put, call} from 'redux-saga/effects';
import curryN from 'ramda/src/curryN';

export const createAction = curryN(2, (type, payload = null) => ({ type, payload }));

export function createRequestGenerator(actionFn, provideCallFn) {
    return function* httpRequestGenerator(action) {
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
