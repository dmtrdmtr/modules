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

var _compose = require('ramda/src/compose');

var _compose2 = _interopRequireDefault(_compose);

var _merge = require('ramda/src/merge');

var _merge2 = _interopRequireDefault(_merge);

var _omit = require('ramda/src/omit');

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createAction = exports.createAction = function createAction(type, staticPayload) {
    return function () {
        var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        return {
            type: type,
            payload: staticPayload || payload
        };
    };
};

function createRequestGenerator(actionFn, provideCallFn) {
    return _regenerator2.default.mark(function httpRequestGenerator(action) {
        var response;
        return _regenerator2.default.wrap(function httpRequestGenerator$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        actionFn = (0, _compose2.default)((0, _merge2.default)((0, _omit2.default)(['type', 'payload'], action)), actionFn);

                        _context.prev = 1;
                        _context.next = 4;
                        return (0, _effects.put)((0, _actions.asRequest)(actionFn(null)));

                    case 4:
                        _context.next = 6;
                        return (0, _effects.call)(provideCallFn(action));

                    case 6:
                        response = _context.sent;
                        _context.next = 9;
                        return (0, _effects.put)((0, _actions.asSuccess)(actionFn(response)));

                    case 9:
                        return _context.abrupt('return', { response: response });

                    case 12:
                        _context.prev = 12;
                        _context.t0 = _context['catch'](1);
                        _context.next = 16;
                        return (0, _effects.put)((0, _actions.asError)(actionFn(_context.t0)));

                    case 16:
                        return _context.abrupt('return', { error: _context.t0 });

                    case 17:
                    case 'end':
                        return _context.stop();
                }
            }
        }, httpRequestGenerator, this, [[1, 12]]);
    });
}