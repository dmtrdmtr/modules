import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import validate from 'redux-validate';
import connect from 'react-redux/lib/connect/connect';
import { Field, reduxForm, propTypes as formPropTypes } from 'redux-form';
import cond from 'ramda/src/cond';
import compose from 'ramda/src/compose';
import assoc from 'ramda/src/assoc';
import { sendRecoveryEmail, PREFIX, asReset } from '../actions';
import { required, email } from '../utils/validators';
import {Input} from '../form/Input';

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
    url: PropTypes.string.isRequired
};

RecoveryForm = reduxForm({
    form: PREFIX + 'recovery',
    validate: validate(schema)
})(RecoveryForm);

const inject = ( {modules} ) => ({
    meta: modules.meta.recovery
});

const mapDispathToProps = (dispatch, props) => bindActionCreators({
    onSubmit: compose(assoc('url', props.url), sendRecoveryEmail),
    clearMeta: compose(asReset, sendRecoveryEmail)
}, dispatch);

export const Recovery =  connect(inject, mapDispathToProps)(RecoveryForm);