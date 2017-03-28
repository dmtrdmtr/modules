'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Login = require('./lib/components/Login');

var _Login2 = _interopRequireDefault(_Login);

var _DateInput = require('./lib/form/DateInput');

var _DateInput2 = _interopRequireDefault(_DateInput);

var _Input = require('./lib/form/Input');

var _Input2 = _interopRequireDefault(_Input);

var _NumberInput = require('./lib/form/NumberInput');

var _NumberInput2 = _interopRequireDefault(_NumberInput);

var _Radio = require('./lib/form/Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _Select = require('./lib/form/Select');

var _Select2 = _interopRequireDefault(_Select);

var _Textarea = require('./lib/form/Textarea');

var _Textarea2 = _interopRequireDefault(_Textarea);

var _root = require('./lib/reducers/root');

var _root2 = _interopRequireDefault(_root);

var _sagas = require('./lib/sagas');

var _sagas2 = _interopRequireDefault(_sagas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        Login: _Login2.default,
        DateInput: _DateInput2.default,
        Input: _Input2.default,
        NumberInput: _NumberInput2.default,
        Radio: _Radio2.default,
        Select: _Select2.default,
        Textarea: _Textarea2.default
    },
    getReducers: function getReducers() {
        return { modules: _root2.default };
    },
    getSagas: function getSagas() {
        return _sagas2.default;
    }
};
