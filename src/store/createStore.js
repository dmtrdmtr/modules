import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createInjectStore } from 'redux-injector';

import {rootReducer} from '../reducers/root';
import {rootSaga} from '../sagas';

const sagaMiddleware = createSagaMiddleware();
let middlewares = [sagaMiddleware];

export default function configureStore(initialState) {
    const store = createInjectStore(
        rootReducer,
        initialState,
        applyMiddleware(...middlewares)
    );

    sagaMiddleware.run(rootSaga);

    return store;
};