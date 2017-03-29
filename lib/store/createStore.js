'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = configureStore;

var _redux = require('redux');

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _reduxInjector = require('redux-injector');

var _root = require('../reducers/root');

var _sagas = require('../sagas');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sagaMiddleware = (0, _reduxSaga2.default)();
var middlewares = [sagaMiddleware];

function configureStore(initialState) {
    var store = (0, _reduxInjector.createInjectStore)(_root.rootReducer, initialState, _redux.applyMiddleware.apply(undefined, middlewares));

    sagaMiddleware.run(_sagas.rootSaga);

    return store;
};