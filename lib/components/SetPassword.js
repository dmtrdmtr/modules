'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SetPassword = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reduxValidate = require('redux-validate');

var _reduxValidate2 = _interopRequireDefault(_reduxValidate);

var _connect = require('react-redux/lib/connect/connect');

var _connect2 = _interopRequireDefault(_connect);

var _reduxForm = require('redux-form');

var _cond = require('ramda/src/cond');

var _cond2 = _interopRequireDefault(_cond);

var _assoc = require('ramda/src/assoc');

var _assoc2 = _interopRequireDefault(_assoc);

var _actions = require('../constants/actions');

var _redux2 = require('../utils/redux');

var _validators = require('../utils/validators');

var _Input = require('../form/Input');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = {
    email: (0, _cond2.default)([_validators.required, _validators.email]),
    password: (0, _cond2.default)([_validators.required, _validators.password])
};

var SetPasswordForm = function (_Component) {
    (0, _inherits3.default)(SetPasswordForm, _Component);

    function SetPasswordForm() {
        (0, _classCallCheck3.default)(this, SetPasswordForm);
        return (0, _possibleConstructorReturn3.default)(this, (SetPasswordForm.__proto__ || (0, _getPrototypeOf2.default)(SetPasswordForm)).apply(this, arguments));
    }

    (0, _createClass3.default)(SetPasswordForm, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                handleSubmit = _props.handleSubmit,
                meta = _props.meta;


            return _react2.default.createElement(
                'form',
                { onSubmit: handleSubmit, noValidate: true },
                _react2.default.createElement(
                    'label',
                    null,
                    'email',
                    _react2.default.createElement(_reduxForm.Field, { name: 'login',
                        component: _Input.Input,
                        type: 'email',
                        placeholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email' })
                ),
                _react2.default.createElement(
                    'label',
                    null,
                    '\u043F\u0430\u0440\u043E\u043B\u044C',
                    _react2.default.createElement(_reduxForm.Field, { name: 'password',
                        component: _Input.Input,
                        type: 'password',
                        placeholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C' })
                ),
                meta.error && _react2.default.createElement(
                    'div',
                    { className: 'text-danger' },
                    meta.error.message
                ),
                _react2.default.createElement(
                    'button',
                    { disabled: meta.pending },
                    'send'
                )
            );
        }
    }]);
    return SetPasswordForm;
}(_react.Component);

SetPasswordForm.propTypes = (0, _extends3.default)({}, _reduxForm.propTypes, {
    url: _react.PropTypes.string.isRequired
});

SetPasswordForm = (0, _reduxForm.reduxForm)({
    form: _actions.PREFIX + 'SetPasswordForm',
    validate: (0, _reduxValidate2.default)(schema)
})(SetPasswordForm);

var inject = function inject(state) {
    return {
        initialValues: {
            login: '',
            password: ''
        },
        meta: state.modules.meta.setPassword
    };
};

var mapDispathToProps = function mapDispathToProps(dispatch, props) {
    return (0, _redux.bindActionCreators)({
        onSubmit: (0, _redux2.createCustomAction)(_actions.SET_PASSWORD, [(0, _assoc2.default)('url', props.url)])
    }, dispatch);
};

var SetPassword = exports.SetPassword = (0, _connect2.default)(inject, mapDispathToProps)(SetPasswordForm);