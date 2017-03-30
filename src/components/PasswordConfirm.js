import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import validate from 'redux-validate';
import connect from 'react-redux/lib/connect/connect';
import { Field, reduxForm, propTypes as formPropTypes } from 'redux-form';
import assoc from 'ramda/src/assoc';
import compose from 'ramda/src/compose';
import dissoc from 'ramda/src/dissoc';
import { passwordConfirm, PREFIX, asReset } from '../actions';
import { conformsTo } from '../utils/validators';
import {Input} from '../form/Input';

const schema = {
    passwordConfirm: (value, name, formValues) => {
        if (!conformsTo('password', value)(formValues)) {
            return 'not conforms'
        }
    }
};

class PasswordConfirmForm extends Component {

    componentWillUnmount = this.props.clearMeta;

    render() {
        const { handleSubmit, meta } = this.props;

        return (
            <form onSubmit={handleSubmit} noValidate>
                <label>
                    Пароль
                    <Field name='password'
                           component={Input}
                           type='password'
                           placeholder='Введите пароль' />
                </label>
                <label>
                    Подтвердите пароль
                    <Field name='passwordConfirm'
                           component={Input}
                           type='password'
                           placeholder='Подтвердите пароль' />
                </label>
                {meta.error &&
                <div className="text-danger">{meta.error.message}</div>
                }
                <button type='submit' disabled={meta.pending}>Отправить</button>
            </form>
        );
    }
}

PasswordConfirmForm.propTypes = {
    ...formPropTypes,
    url: PropTypes.string.isRequired
};

PasswordConfirmForm = reduxForm({
    form: PREFIX + 'passwordConfirm',
    validate: validate(schema)
})(PasswordConfirmForm);

const inject = ( {modules} ) => ({
    meta: modules.meta.passwordConfirm
});

const mapDispathToProps = (dispatch, props) => bindActionCreators({
    onSubmit: compose(assoc('url', props.url), passwordConfirm, dissoc('passwordConfirm')),
    clearMeta: compose(asReset, passwordConfirm)
}, dispatch);

export const PasswordConfirm =  connect(inject, mapDispathToProps)(PasswordConfirmForm);