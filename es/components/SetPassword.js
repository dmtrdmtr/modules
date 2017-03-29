var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import validate from 'redux-validate';
import connect from 'react-redux/lib/connect/connect';
import { Field, reduxForm, propTypes as formPropTypes } from 'redux-form';
import cond from 'ramda/src/cond';
import assoc from 'ramda/src/assoc';
import { SET_PASSWORD, PREFIX } from '../constants/actions';
import { createCustomAction } from '../utils/redux';
import { required, email, password } from '../utils/validators';
import { Input } from '../form/Input';

var schema = {
    email: cond([required, email]),
    password: cond([required, password])
};

var SetPasswordForm = function (_Component) {
    _inherits(SetPasswordForm, _Component);

    function SetPasswordForm() {
        _classCallCheck(this, SetPasswordForm);

        return _possibleConstructorReturn(this, (SetPasswordForm.__proto__ || Object.getPrototypeOf(SetPasswordForm)).apply(this, arguments));
    }

    _createClass(SetPasswordForm, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                handleSubmit = _props.handleSubmit,
                meta = _props.meta;


            return React.createElement(
                'form',
                { onSubmit: handleSubmit, noValidate: true },
                React.createElement(
                    'label',
                    null,
                    'email',
                    React.createElement(Field, { name: 'login',
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
                meta.error && React.createElement(
                    'div',
                    { className: 'text-danger' },
                    meta.error.message
                ),
                React.createElement(
                    'button',
                    { disabled: meta.pending },
                    'send'
                )
            );
        }
    }]);

    return SetPasswordForm;
}(Component);

SetPasswordForm.propTypes = _extends({}, formPropTypes, {
    url: PropTypes.string.isRequired
});

SetPasswordForm = reduxForm({
    form: PREFIX + 'SetPasswordForm',
    validate: validate(schema)
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
    return bindActionCreators({
        onSubmit: createCustomAction(SET_PASSWORD, [assoc('url', props.url)])
    }, dispatch);
};

export var SetPassword = connect(inject, mapDispathToProps)(SetPasswordForm);