import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import validate from 'redux-validate';
import connect from 'react-redux/lib/connect/connect';
import {reduxForm, change, Field, propTypes} from 'redux-form';
import cond from 'ramda/src/cond';
import path from 'ramda/src/path';
import assoc from 'ramda/src/assoc';
import merge from 'ramda/src/merge';
import tap from 'ramda/src/tap';
import { LOGIN } from '../constants/actions';
import { createCustomAction } from '../utils/redux';
import { required, email, password } from '../utils/validators';
import Input from '../form/Input';

const schema = {
    email: cond([required, email]),
    password: cond([required, password])
};

class LoginForm extends Component {

    componentWillReceiveProps = next => {
        const { dispatch, captcha } = this.props;

        if (next.captcha !== captcha) {
            dispatch(change('login', 'code', null));
        }
    };
    
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

LoginForm.propTypes = merge(propTypes, {
    url: PropTypes.string.isRequired
});

LoginForm = reduxForm({
    form: 'login',
    validate: validate(schema)
})(LoginForm);

const inject = (state) => ({
    initialValues: {
        email: '',
        password: ''
    },
    captcha: path(['error', 'response', 'data', 'code'], state.modules.meta.login) || null
});

const mapDispathToProps = (dispatch, props) => bindActionCreators({
    onSubmit: createCustomAction(LOGIN, [ assoc('url', props.url), tap(console.log) ])
}, dispatch);

export default connect(inject, mapDispathToProps)(LoginForm);