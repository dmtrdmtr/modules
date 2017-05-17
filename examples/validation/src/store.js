import { createStore, combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

export default function configureStore(initialState) {
    const store = createStore(
        combineReducers({ form }),
        initialState
    );

    return store;
}
