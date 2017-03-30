import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import validate from 'redux-validate';
import connect from 'react-redux/lib/connect/connect';
import {reduxForm, change, Field, propTypes as formPropTypes} from 'redux-form';
import cond from 'ramda/src/cond';
import path from 'ramda/src/path';
import assoc from 'ramda/src/assoc';
import compose from 'ramda/src/compose';
import { login, PREFIX, asReset } from '../actions';
import { required, email, password } from '../utils/validators';
import {Input} from '../form/Input';

const schema = {
    email: cond([required, email]),
    password: cond([required, password])
};

class LoginForm extends Component {

    componentWillReceiveProps = next => {
        const { dispatch, captcha } = this.props;

        if (next.captcha !== captcha) {
            dispatch(change(this.props.form, 'code', null));
        }
    };

    componentWillUnmount = this.props.clearMeta;
    
    render() {
        const { handleSubmit, captcha } = this.props;

        return (
            <form onSubmit={handleSubmit} noValidate>
                <label>
                    email
                    <Field name='email'
                           component={Input}
                           type='email'
                           placeholder='Введите email' />
                </label>
                <label>
                    пароль
                    <Field name='password'
                           component={Input}
                           type='password'
                           placeholder='Введите пароль' />
                </label>
                { captcha &&
                <div>
                    <Field name='code'
                           component={Input}
                           type='text' />
                    <img alt="captcha" src={`data:image/png;base64,${captcha}`} />
                </div> }
                <button type='submit'>Войти</button>
            </form>
        );
    }
}

LoginForm.propTypes = {
    ...formPropTypes,
    url: PropTypes.string.isRequired
};

LoginForm = reduxForm({
    form: PREFIX + 'login',
    validate: validate(schema)
})(LoginForm);

const inject = (state) => ({
    captcha: path(['error', 'data', 'code'], state.modules.meta.login) || null
});

const mapDispathToProps = (dispatch, props) => bindActionCreators({
    onSubmit: compose(assoc('url', props.url), login),
    clearMeta: compose(asReset, login)
}, dispatch);

export const Login = connect(inject, mapDispathToProps)(LoginForm);