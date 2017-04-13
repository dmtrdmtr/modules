'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.requestGenerator = requestGenerator;

var _effects = require('redux-saga/effects');

var _actionHelpers = require('../actionHelpers');

var _compose = require('ramda/src/compose');

var _compose2 = _interopRequireDefault(_compose);

var _merge = require('ramda/src/merge');

var _merge2 = _interopRequireDefault(_merge);

var _doAction = require('./doAction');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [requestGenerator].map(_regenerator2.default.mark);

function requestGenerator(actionFn, action) {
    var response;
    return _regenerator2.default.wrap(function requestGenerator$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    actionFn = (0, _compose2.default)((0, _merge2.default)({ requestAction: action }), actionFn);

                    _context.prev = 1;
                    _context.next = 4;
                    return (0, _effects.put)((0, _actionHelpers.asRequest)(actionFn(null)));

                case 4:
                    _context.next = 6;
                    return (0, _effects.call)((0, _doAction.doAction)(action));

                case 6:
                    response = _context.sent;
                    _context.next = 9;
                    return (0, _effects.put)((0, _actionHelpers.asSuccess)(actionFn(response)));

                case 9:
                    return _context.abrupt('return', { response: response });

                case 12:
                    _context.prev = 12;
                    _context.t0 = _context['catch'](1);
                    _context.next = 16;
                    return (0, _effects.put)((0, _actionHelpers.asError)(actionFn(_context.t0)));

                case 16:
                    return _context.abrupt('return', { error: _context.t0 });

                case 17:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this, [[1, 12]]);
}