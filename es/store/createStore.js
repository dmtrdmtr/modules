import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createInjectStore } from 'redux-injector';

import { rootReducer } from '../reducers/root';
import { rootSaga } from '../sagas';

var sagaMiddleware = createSagaMiddleware();
var middlewares = [sagaMiddleware];

export default function configureStore(initialState) {
    var store = createInjectStore(rootReducer, initialState, applyMiddleware.apply(undefined, middlewares));

    sagaMiddleware.run(rootSaga);

    return store;
};