'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.successType = exports.requestType = exports.errorType = exports.createCustomAction = exports.createAction = undefined;
exports.createRequestGenerator = createRequestGenerator;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _effects = require('redux-saga/effects');

var _pipe = require('ramda/src/pipe');

var _pipe2 = _interopRequireDefault(_pipe);

var _curry = require('ramda/src/curry');

var _curry2 = _interopRequireDefault(_curry);

var _evolve = require('ramda/src/evolve');

var _evolve2 = _interopRequireDefault(_evolve);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var createAction = exports.createAction = _ramda2.default.curryN(2, function (type) {
    var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return { type: type, payload: payload };
});

var createCustomAction = exports.createCustomAction = (0, _curry2.default)(function (type, transformers) {
    return _pipe2.default.apply(undefined, [createAction(type)].concat(_toConsumableArray(transformers)));
});

var errorType = exports.errorType = function errorType(action) {
    return action + '_ERROR';
};
var requestType = exports.requestType = function requestType(action) {
    return action + '_REQUEST';
};
var successType = exports.successType = function successType(action) {
    return action + '_SUCCESS';
};

var setStatus = function setStatus(statusFn) {
    return (0, _evolve2.default)({ type: statusFn });
};

function createRequestGenerator(actionFn, provideCallFn) {

    return regeneratorRuntime.mark(function httpRequestGenerator(action) {
        var requestAction, response, successAction, errorAction;
        return regeneratorRuntime.wrap(function httpRequestGenerator$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        requestAction = setStatus(requestType)(actionFn(null));
                        _context.next = 4;
                        return (0, _effects.put)(requestAction);

                    case 4:
                        _context.next = 6;
                        return (0, _effects.call)(provideCallFn(action));

                    case 6:
                        response = _context.sent;
                        successAction = setStatus(successType)(actionFn(response));
                        _context.next = 10;
                        return (0, _effects.put)(successAction);

                    case 10:
                        return _context.abrupt('return', { response: response });

                    case 13:
                        _context.prev = 13;
                        _context.t0 = _context['catch'](0);
                        errorAction = setStatus(errorType)(actionFn(_context.t0));
                        _context.next = 18;
                        return (0, _effects.put)(errorAction);

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