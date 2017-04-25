import { applyMiddleware, createStore, combineReducers, Middleware, Store } from 'redux';
import createSagaMiddleware, { SagaIterator } from 'redux-saga';
import { reducer as form } from 'redux-form';

import { getReducers, getSagas } from '../../index';

const sagaMiddleware = createSagaMiddleware();
const middlewares: Middleware[] = [sagaMiddleware];

export default function configureStore(initialState: any = {}): Store<any> {
    const store = createStore(
        combineReducers({
            ...getReducers(),
            form
        }),
        initialState,
        applyMiddleware(...middlewares)
    );

    sagaMiddleware.run(function* (): SagaIterator {
        yield getSagas()
    });

    return store;
};
