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

        return _possibleConstructorReturn(this, (SetPasswordForm.__proto__ || _Object$getPrototypeOf(SetPasswordForm)).apply(this, arguments));
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