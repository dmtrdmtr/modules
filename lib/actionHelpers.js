'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createAction = exports.asReset = exports.asSuccess = exports.asRequest = exports.asError = exports.toReset = exports.toSuccess = exports.toRequest = exports.toError = undefined;

var _evolve = require('ramda/src/evolve');

var _evolve2 = _interopRequireDefault(_evolve);

var _concat = require('ramda/src/concat');

var _concat2 = _interopRequireDefault(_concat);

var _ = require('ramda/src/__');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toError = exports.toError = (0, _concat2.default)(_2.default, '_ERROR');
var toRequest = exports.toRequest = (0, _concat2.default)(_2.default, '_REQUEST');
var toSuccess = exports.toSuccess = (0, _concat2.default)(_2.default, '_SUCCESS');
var toReset = exports.toReset = (0, _concat2.default)(_2.default, '_RESET');

var setStatus = function setStatus(statusFn) {
    return (0, _evolve2.default)({ type: statusFn });
};

var asError = exports.asError = setStatus(toError);
var asRequest = exports.asRequest = setStatus(toRequest);
var asSuccess = exports.asSuccess = setStatus(toSuccess);
var asReset = exports.asReset = setStatus(toReset);

var createAction = exports.createAction = function createAction(type, staticPayload) {
    return function () {
        var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        return {
            type: type,
            payload: staticPayload || payload,
            attrs: attrs
        };
    };
};