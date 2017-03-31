'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PasswordConfirm = undefined;

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

var _assoc = require('ramda/src/assoc');

var _assoc2 = _interopRequireDefault(_assoc);

var _compose = require('ramda/src/compose');

var _compose2 = _interopRequireDefault(_compose);

var _dissoc = require('ramda/src/dissoc');

var _dissoc2 = _interopRequireDefault(_dissoc);

var _actions = require('../actions');

var _validators = require('../utils/validators');

var _Input = require('../form/Input');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var schema = {
    passwordConfirm: function passwordConfirm(value, name, formValues) {
        if (!(0, _validators.conformsTo)('password', value)(formValues)) {
            return 'not conforms';
        }
    }
};

var PasswordConfirmForm = function (_Component) {
    _inherits(PasswordConfirmForm, _Component);

    function PasswordConfirmForm() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, PasswordConfirmForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PasswordConfirmForm.__proto__ || Object.getPrototypeOf(PasswordConfirmForm)).call.apply(_ref, [this].concat(args))), _this), _this.componentWillUnmount = _this.props.clearMeta, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(PasswordConfirmForm, [{
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
                    '\u041F\u0430\u0440\u043E\u043B\u044C',
                    _react2.default.createElement(_reduxForm.Field, { name: 'password',
                        component: _Input.Input,
                        type: 'password',
                        placeholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C' })
                ),
                _react2.default.createElement(
                    'label',
                    null,
                    '\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C',
                    _react2.default.createElement(_reduxForm.Field, { name: 'passwordConfirm',
                        component: _Input.Input,
                        type: 'password',
                        placeholder: '\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C' })
                ),
                meta.error && _react2.default.createElement(
                    'div',
                    { className: 'text-danger' },
                    meta.error.message
                ),
                _react2.default.createElement(
                    'button',
                    { type: 'submit', disabled: meta.pending },
                    '\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C'
                )
            );
        }
    }]);

    return PasswordConfirmForm;
}(_react.Component);

PasswordConfirmForm.propTypes = _extends({}, _reduxForm.propTypes, {
    url: _react.PropTypes.string.isRequired
});

PasswordConfirmForm = (0, _reduxForm.reduxForm)({
    form: _actions.PREFIX + 'passwordConfirm',
    validate: (0, _reduxValidate2.default)(schema)
})(PasswordConfirmForm);

var inject = function inject(_ref2) {
    var modules = _ref2.modules;
    return {
        meta: modules.meta.passwordConfirm
    };
};

var mapDispathToProps = function mapDispathToProps(dispatch, props) {
    return (0, _redux.bindActionCreators)({
        onSubmit: (0, _compose2.default)((0, _assoc2.default)('url', props.url), _actions.passwordConfirm, (0, _dissoc2.default)('passwordConfirm')),
        clearMeta: (0, _compose2.default)(_actions.asReset, _actions.passwordConfirm)
    }, dispatch);
};

var PasswordConfirm = exports.PasswordConfirm = (0, _connect2.default)(inject, mapDispathToProps)(PasswordConfirmForm);