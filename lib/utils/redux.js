'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createAction = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.createRequestGenerator = createRequestGenerator;

var _effects = require('redux-saga/effects');

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createAction = exports.createAction = function createAction(type) {
    return function (payload) {
        return { type: type, payload: payload };
    };
};

function createRequestGenerator(actionFn, provideCallFn) {
    return _regenerator2.default.mark(function httpRequestGenerator(action) {
        var response;
        return _regenerator2.default.wrap(function httpRequestGenerator$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return (0, _effects.put)((0, _actions.asRequest)(actionFn(null)));

                    case 3:
                        _context.next = 5;
                        return (0, _effects.call)(provideCallFn(action));

                    case 5:
                        response = _context.sent;
                        _context.next = 8;
                        return (0, _effects.put)((0, _actions.asSuccess)(actionFn(response)));

                    case 8:
                        return _context.abrupt('return', { response: response });

                    case 11:
                        _context.prev = 11;
                        _context.t0 = _context['catch'](0);
                        _context.next = 15;
                        return (0, _effects.put)((0, _actions.asError)(actionFn(_context.t0)));

                    case 15:
                        return _context.abrupt('return', { error: _context.t0 });

                    case 16:
                    case 'end':
                        return _context.stop();
                }
            }
        }, httpRequestGenerator, this, [[0, 11]]);
    });
}