import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/lib/connect/connect';
import {reduxForm, change, Field, propTypes as formPropTypes} from 'redux-form';
import path from 'ramda/src/path';
import compose from 'ramda/src/compose';
import { login } from '../actions';
import { asReset } from '../actionHelpers';
import { PREFIX } from '../actionTypes';
import { Input } from '../form/Input';

const mapStateToProps = (state) => ({
    captcha: path(['error', 'data', 'code'], state.modules.meta.login) || null
});

const mapDispathToProps = (dispatch, props) => bindActionCreators({
    onSubmit: (payload) => login(payload, {url: props.url}),
    clearMeta: compose(asReset, login)
}, dispatch);

@connect(mapStateToProps, mapDispathToProps)
@reduxForm({form: PREFIX + 'login'})
export class Login extends Component {
    static propTypes = {
        ...formPropTypes,
        url: PropTypes.string.isRequired
    };

    componentWillReceiveProps = next => {
        const { dispatch, captcha } = this.props;

        if (next.captcha !== captcha) {
            dispatch(change(this.props.form, 'code', null));
        }
    };

    componentWillUnmount = this.props.clearMeta;
    
    render() {
        const { handleSubmit, captcha, children } = this.props;

        return (
            <form onSubmit={handleSubmit} noValidate>
                {children}

                { captcha &&
                <div>
                    <Field name='code'
                           component={Input}
                           type='text' />
                    <img alt="captcha" src={`data:image/png;base64,${captcha}`} />
                </div> }
            </form>
        );
    }
}