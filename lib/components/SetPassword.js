'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SetPassword = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = require('redux');

var _reduxValidate = require('redux-validate');

var _reduxValidate2 = _interopRequireDefault(_reduxValidate);

var _connect = require('react-redux/lib/connect/connect');

var _connect2 = _interopRequireDefault(_connect);

var _reduxForm = require('redux-form');

var _cond = require('ramda/src/cond');

var _cond2 = _interopRequireDefault(_cond);

var _compose = require('ramda/src/compose');

var _compose2 = _interopRequireDefault(_compose);

var _actions = require('../actions');

var _actionHelpers = require('../actionHelpers');

var _actionTypes = require('../actionTypes');

var _validators = require('../utils/validators');

var _Input = require('../form/Input');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var schema = {
    email: (0, _cond2.default)([_validators.required, _validators.email]),
    password: (0, _cond2.default)([_validators.required, _validators.password])
};

var SetPasswordForm = function (_Component) {
    _inherits(SetPasswordForm, _Component);

    function SetPasswordForm() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SetPasswordForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SetPasswordForm.__proto__ || Object.getPrototypeOf(SetPasswordForm)).call.apply(_ref, [this].concat(args))), _this), _this.componentWillUnmount = _this.props.clearMeta, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SetPasswordForm, [{
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
                this.props.children,
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

SetPasswordForm.propTypes = _extends({}, _reduxForm.propTypes, {
    url: _propTypes2.default.string.isRequired
});

SetPasswordForm = (0, _reduxForm.reduxForm)({
    form: _actionTypes.PREFIX + 'SetPasswordForm',
    validate: (0, _reduxValidate2.default)(schema)
})(SetPasswordForm);

var inject = function inject(state) {
    return {
        meta: state.modules.meta.setPassword
    };
};

var mapDispathToProps = function mapDispathToProps(dispatch, props) {
    return (0, _redux.bindActionCreators)({
        onSubmit: function onSubmit(payload) {
            return (0, _actions.setPassword)(payload, { url: props.url });
        },
        clearMeta: (0, _compose2.default)(_actionHelpers.asReset, _actions.setPassword)
    }, dispatch);
};

var SetPassword = exports.SetPassword = (0, _connect2.default)(inject, mapDispathToProps)(SetPasswordForm);