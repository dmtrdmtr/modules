import { applyMiddleware, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {reducer as form} from 'redux-form';

import { getSagas } from '../../src/sagas';
import { getReducers } from '../../src/reducers';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export default function configureStore(initialState = {}) {
    const store = createStore(
        combineReducers({
            ...getReducers(),
            form
        }),
        initialState,
        applyMiddleware(...middlewares)
    );

    sagaMiddleware.run(function* () {
        yield getSagas()
    });

    return store;
};
