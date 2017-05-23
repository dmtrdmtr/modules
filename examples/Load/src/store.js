import { applyMiddleware, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {reducer as form} from 'redux-form';

import {getSagas, getReducers} from 'experium-modules';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const {createLogger} = require('redux-logger');
middlewares.push(createLogger({collapsed: true}));

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
