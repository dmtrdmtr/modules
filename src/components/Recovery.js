import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import validate from 'redux-validate';
import connect from 'react-redux/lib/connect/connect';
import { Field, reduxForm, propTypes as formPropTypes } from 'redux-form';
import cond from 'ramda/src/cond';
import compose from 'ramda/src/compose';
import { sendRecoveryEmail, PREFIX, asReset } from '../actions';
import { required, email } from '../utils/validators';
import Input from '../form/Input';

const schema = {
    email: cond([required, email])
};

class RecoveryForm extends Component {

    componentWillUnmount = this.props.clearMeta;

    render() {
        const { handleSubmit, meta } = this.props;

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
                    <Field name='url-with-token' component="input" style={{display: 'none'}} />
                </label>
                {meta.error &&
                <div className="text-danger">{meta.error.message}</div>
                }
                <button type='submit' disabled={meta.pending}>Отправить</button>
            </form>
        );
    }
}

RecoveryForm.propTypes = {
    ...formPropTypes,
    onSubmit: PropTypes.func.isRequired,
    getRecoveryUrl: PropTypes.func.isRequired
};

RecoveryForm = reduxForm({
    form: PREFIX + 'recovery',
    validate: validate(schema)
})(RecoveryForm);

const inject = ( {modules}, {getRecoveryUrl} ) => ({
    initialValues: {
        email: '',
        'url-with-token': getRecoveryUrl()
    },
    meta: modules.meta.recoveryMeta
});

const mapDispathToProps = (dispatch, props) => bindActionCreators({
    onSubmit: compose(assoc('url', props.url), sendRecoveryEmail),
    clearMeta: compose(asReset, sendRecoveryEmail)
}, dispatch);

export const Recovery =  connect(inject, mapDispathToProps)(RecoveryForm);