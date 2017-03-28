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
import Input from '../form/Input';

const schema = {
    email: cond([required, email]),
    password: cond([required, password])
};

class SetPasswordForm extends Component {

    render() {
        const { handleSubmit, meta } = this.props;

        return (
            <form onSubmit={handleSubmit} noValidate>
                <label>
                    email
                    <Field name='login'
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

                {meta.error &&
                    <div className="text-danger">{meta.error.message}</div>
                }

                <button disabled={meta.pending}>send</button>
            </form>
        );
    }
}

SetPasswordForm.propTypes = {
    ...formPropTypes,
    url: PropTypes.string.isRequired
};

SetPasswordForm = reduxForm({
    form: PREFIX + 'SetPasswordForm',
    validate: validate(schema)
})(SetPasswordForm);

const inject = (state) => ({
    initialValues: {
        login: '',
        password: ''
    },
    meta: state.modules.meta.setPassword
});

const mapDispathToProps = (dispatch, props) => bindActionCreators({
    onSubmit: createCustomAction(SET_PASSWORD, [ assoc('url', props.url) ])
}, dispatch);

export default connect(inject, mapDispathToProps)(SetPasswordForm);