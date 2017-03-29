function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import R from 'ramda';
import { put, call } from 'redux-saga/effects';
import pipe from 'ramda/src/pipe';
import curry from 'ramda/src/curry';
import evolve from 'ramda/src/evolve';

export var createAction = R.curryN(2, function (type) {
    var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return { type: type, payload: payload };
});

export var createCustomAction = curry(function (type, transformers) {
    return pipe.apply(undefined, [createAction(type)].concat(_toConsumableArray(transformers)));
});

export var errorType = function errorType(action) {
    return action + '_ERROR';
};
export var requestType = function requestType(action) {
    return action + '_REQUEST';
};
export var successType = function successType(action) {
    return action + '_SUCCESS';
};

var setStatus = function setStatus(statusFn) {
    return evolve({ type: statusFn });
};

export function createRequestGenerator(actionFn, provideCallFn) {

    return regeneratorRuntime.mark(function httpRequestGenerator(action) {
        var requestAction, response, successAction, errorAction;
        return regeneratorRuntime.wrap(function httpRequestGenerator$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        requestAction = setStatus(requestType)(actionFn(null));
                        _context.next = 4;
                        return put(requestAction);

                    case 4:
                        _context.next = 6;
                        return call(provideCallFn(action));

                    case 6:
                        response = _context.sent;
                        successAction = setStatus(successType)(actionFn(response));
                        _context.next = 10;
                        return put(successAction);

                    case 10:
                        return _context.abrupt('return', { response: response });

                    case 13:
                        _context.prev = 13;
                        _context.t0 = _context['catch'](0);
                        errorAction = setStatus(errorType)(actionFn(_context.t0));
                        _context.next = 18;
                        return put(errorAction);

                    case 18:
                        return _context.abrupt('return', { error: _context.t0 });

                    case 19:
                    case 'end':
                        return _context.stop();
                }
            }
        }, httpRequestGenerator, this, [[0, 13]]);
    });
}