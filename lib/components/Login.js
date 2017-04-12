'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Login = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _connect = require('react-redux/lib/connect/connect');

var _connect2 = _interopRequireDefault(_connect);

var _reduxForm = require('redux-form');

var _path = require('ramda/src/path');

var _path2 = _interopRequireDefault(_path);

var _compose = require('ramda/src/compose');

var _compose2 = _interopRequireDefault(_compose);

var _actions = require('../actions');

var _actionHelpers = require('../actionHelpers');

var _actionTypes = require('../actionTypes');

var _Input = require('../form/Input');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
    return {
        captcha: (0, _path2.default)(['error', 'data', 'code'], state.modules.meta.login) || null
    };
};

var mapDispathToProps = function mapDispathToProps(dispatch, props) {
    return (0, _redux.bindActionCreators)({
        onSubmit: function onSubmit(payload) {
            return (0, _actions.login)(payload, { url: props.url });
        },
        clearMeta: (0, _compose2.default)(_actionHelpers.asReset, _actions.login)
    }, dispatch);
};

var Login = exports.Login = (_dec = (0, _connect2.default)(mapStateToProps, mapDispathToProps), _dec2 = (0, _reduxForm.reduxForm)({ form: _actionTypes.PREFIX + 'login' }), _dec(_class = _dec2(_class = (_temp2 = _class2 = function (_Component) {
    _inherits(Login, _Component);

    function Login() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Login);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.componentWillReceiveProps = function (next) {
            var _this$props = _this.props,
                dispatch = _this$props.dispatch,
                captcha = _this$props.captcha;


            if (next.captcha !== captcha) {
                dispatch((0, _reduxForm.change)(_this.props.form, 'code', null));
            }
        }, _this.componentWillUnmount = _this.props.clearMeta, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Login, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                handleSubmit = _props.handleSubmit,
                captcha = _props.captcha,
                children = _props.children;


            return _react2.default.createElement(
                'form',
                { onSubmit: handleSubmit, noValidate: true },
                children,
                captcha && _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_reduxForm.Field, { name: 'code',
                        component: _Input.Input,
                        type: 'text' }),
                    _react2.default.createElement('img', { alt: 'captcha', src: 'data:image/png;base64,' + captcha })
                )
            );
        }
    }]);

    return Login;
}(_react.Component), _class2.propTypes = _extends({}, _reduxForm.propTypes, {
    url: _react.PropTypes.string.isRequired
}), _temp2)) || _class) || _class);