import _extends from 'babel-runtime/helpers/extends';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import validate from 'redux-validate';
import connect from 'react-redux/lib/connect/connect';
import { reduxForm, change, Field, propTypes as formPropTypes } from 'redux-form';
import cond from 'ramda/src/cond';
import path from 'ramda/src/path';
import assoc from 'ramda/src/assoc';
import { LOGIN, PREFIX } from '../constants/actions';
import { createCustomAction } from '../utils/redux';
import { required, email, password } from '../utils/validators';
import { Input } from '../form/Input';

var schema = {
    email: cond([required, email]),
    password: cond([required, password])
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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LoginForm.__proto__ || _Object$getPrototypeOf(LoginForm)).call.apply(_ref, [this].concat(args))), _this), _this.componentWillReceiveProps = function (next) {
            var _this$props = _this.props,
                dispatch = _this$props.dispatch,
                captcha = _this$props.captcha;


            if (next.captcha !== captcha) {
                dispatch(change(_this.props.form, 'code', null));
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(LoginForm, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                handleSubmit = _props.handleSubmit,
                captcha = _props.captcha;


            return React.createElement(
                'form',
                { onSubmit: handleSubmit, noValidate: true },
                React.createElement(
                    'label',
                    null,
                    'email',
                    React.createElement(Field, { name: 'email',
                        component: Input,
                        type: 'email',
                        placeholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email' })
                ),
                React.createElement(
                    'label',
                    null,
                    '\u043F\u0430\u0440\u043E\u043B\u044C',
                    React.createElement(Field, { name: 'password',
                        component: Input,
                        type: 'password',
                        placeholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C' })
                ),
                captcha && React.createElement(
                    'div',
                    null,
                    React.createElement(Field, { name: 'code',
                        component: Input,
                        type: 'text' }),
                    React.createElement('img', { alt: 'captcha', src: 'data:image/png;base64,' + captcha })
                ),
                React.createElement(
                    'button',
                    { type: 'submit' },
                    '\u0412\u043E\u0439\u0442\u0438'
                )
            );
        }
    }]);

    return LoginForm;
}(Component);

LoginForm.propTypes = _extends({}, formPropTypes, {
    url: PropTypes.string.isRequired
});

LoginForm = reduxForm({
    form: PREFIX + 'login',
    validate: validate(schema)
})(LoginForm);

var inject = function inject(state) {
    return {
        initialValues: {
            email: '',
            password: ''
        },
        captcha: path(['error', 'data', 'code'], state.modules.meta.login) || null
    };
};

var mapDispathToProps = function mapDispathToProps(dispatch, props) {
    return bindActionCreators({
        onSubmit: createCustomAction(LOGIN, [assoc('url', props.url)])
    }, dispatch);
};

export var Login = connect(inject, mapDispathToProps)(LoginForm);