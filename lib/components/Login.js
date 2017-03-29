'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Login = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var _path = require('ramda/src/path');

var _path2 = _interopRequireDefault(_path);

var _assoc = require('ramda/src/assoc');

var _assoc2 = _interopRequireDefault(_assoc);

var _actions = require('../constants/actions');

var _redux2 = require('../utils/redux');

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

var LoginForm = function (_Component) {
    _inherits(LoginForm, _Component);

    function LoginForm() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, LoginForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call.apply(_ref, [this].concat(args))), _this), _this.componentWillReceiveProps = function (next) {
            var _this$props = _this.props,
                dispatch = _this$props.dispatch,
                captcha = _this$props.captcha;


            if (next.captcha !== captcha) {
                dispatch((0, _reduxForm.change)(_this.props.form, 'code', null));
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(LoginForm, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                handleSubmit = _props.handleSubmit,
                captcha = _props.captcha;


            return _react2.default.createElement(
                'form',
                { onSubmit: handleSubmit, noValidate: true },
                _react2.default.createElement(
                    'label',
                    null,
                    'email',
                    _react2.default.createElement(_reduxForm.Field, { name: 'email',
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
                captcha && _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_reduxForm.Field, { name: 'code',
                        component: _Input.Input,
                        type: 'text' }),
                    _react2.default.createElement('img', { alt: 'captcha', src: 'data:image/png;base64,' + captcha })
                ),
                _react2.default.createElement(
                    'button',
                    { type: 'submit' },
                    '\u0412\u043E\u0439\u0442\u0438'
                )
            );
        }
    }]);

    return LoginForm;
}(_react.Component);

LoginForm.propTypes = _extends({}, _reduxForm.propTypes, {
    url: _react.PropTypes.string.isRequired
});

LoginForm = (0, _reduxForm.reduxForm)({
    form: _actions.PREFIX + 'login',
    validate: (0, _reduxValidate2.default)(schema)
})(LoginForm);

var inject = function inject(state) {
    return {
        initialValues: {
            email: '',
            password: ''
        },
        captcha: (0, _path2.default)(['error', 'data', 'code'], state.modules.meta.login) || null
    };
};

var mapDispathToProps = function mapDispathToProps(dispatch, props) {
    return (0, _redux.bindActionCreators)({
        onSubmit: (0, _redux2.createCustomAction)(_actions.LOGIN, [(0, _assoc2.default)('url', props.url)])
    }, dispatch);
};

var Login = exports.Login = (0, _connect2.default)(inject, mapDispathToProps)(LoginForm);