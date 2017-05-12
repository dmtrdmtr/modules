import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/lib/connect/connect';
import {reduxForm, change, Field, propTypes as formPropTypes} from 'redux-form';
import path from 'ramda/src/path';
import compose from 'ramda/src/compose';
import { login } from '../actions';
import { asReset } from '../actionHelpers';
import { PREFIX } from '../actionTypes';
import { Input } from '../form/Input';

const LOGIN_FORM_NAME = PREFIX + 'login';

const mapDispathToProps = (dispatch, props) => bindActionCreators({
    onSubmit: (payload) => login(payload, {url: props.url}),
    clearMeta: compose(asReset, login)
}, dispatch);

@connect(null, mapDispathToProps)
@reduxForm({form: LOGIN_FORM_NAME})
export class Login extends Component {
    static propTypes = {
        ...formPropTypes,
        url: PropTypes.string.isRequired
    };

    componentWillUnmount = this.props.clearMeta;

    render() {
        const { handleSubmit, children } = this.props;

        return (
            <form onSubmit={handleSubmit} noValidate>
                {children}
            </form>
        );
    }
}


const mapStateToProps = (state) => ({
    captcha: path(['error', 'data', 'code'], state.modules.meta.login.post) || null
});

@connect(mapStateToProps)
class Captcha extends Component {
    componentWillReceiveProps = next => {
        const { captcha, dispatch } = this.props;

        if (next.captcha !== captcha) {
            dispatch(change(LOGIN_FORM_NAME, 'code', null));
        }
    };

    render() {
        const {captcha} = this.props;

        if (!captcha) {
            return null;
        }

        return (
            <div>
                <Field name='code'
                       component={Input}
                       type='text' />
                <img alt="captcha" src={`data:image/png;base64,${captcha}`} />
            </div>
        );
    }
};

Login.Captcha = Captcha;