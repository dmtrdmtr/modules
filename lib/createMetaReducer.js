'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.createMetaReducer = createMetaReducer;

var _map = require('ramda/src/map');

var _map2 = _interopRequireDefault(_map);

var _toPairs = require('ramda/src/toPairs');

var _toPairs2 = _interopRequireDefault(_toPairs);

var _cond = require('ramda/src/cond');

var _cond2 = _interopRequireDefault(_cond);

var _append = require('ramda/src/append');

var _append2 = _interopRequireDefault(_append);

var _T = require('ramda/src/T');

var _T2 = _interopRequireDefault(_T);

var _F = require('ramda/src/F');

var _F2 = _interopRequireDefault(_F);

var _unnest = require('ramda/src/unnest');

var _unnest2 = _interopRequireDefault(_unnest);

var _always = require('ramda/src/always');

var _always2 = _interopRequireDefault(_always);

var _propEq = require('ramda/src/propEq');

var _propEq2 = _interopRequireDefault(_propEq);

var _converge = require('ramda/src/converge');

var _converge2 = _interopRequireDefault(_converge);

var _prop = require('ramda/src/prop');

var _prop2 = _interopRequireDefault(_prop);

var _actionHelpers = require('./actionHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function createMetaReducer(actions) {
    var initialState = { get: {}, put: {}, post: {}, delete: {} };

    var actionSwitcher = (0, _map2.default)(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            request = _ref2[0],
            actionType = _ref2[1];

        var getMeta = (0, _converge2.default)(function (pending, success, error) {
            return _defineProperty({}, request, { pending: pending, success: success, error: error });
        });

        return [[(0, _propEq2.default)('type', (0, _actionHelpers.toReset)(actionType)), getMeta([_F2.default, _F2.default, _F2.default])], [(0, _propEq2.default)('type', (0, _actionHelpers.toRequest)(actionType)), getMeta([_T2.default, _F2.default, _F2.default])], [(0, _propEq2.default)('type', (0, _actionHelpers.toSuccess)(actionType)), getMeta([_F2.default, _T2.default, _F2.default])], [(0, _propEq2.default)('type', (0, _actionHelpers.toError)(actionType)), getMeta([_F2.default, _F2.default, (0, _prop2.default)('payload')])]];
    }, (0, _toPairs2.default)(actions));

    var switcher = (0, _cond2.default)((0, _append2.default)([_T2.default, (0, _always2.default)({})], (0, _unnest2.default)(actionSwitcher)));

    return function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
        var action = arguments[1];
        return _extends({}, state, switcher(action));
    };
}