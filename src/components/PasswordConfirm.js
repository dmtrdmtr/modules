import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/lib/connect/connect';
import { reduxForm, propTypes as formPropTypes } from 'redux-form';
import compose from 'ramda/src/compose';
import dissoc from 'ramda/src/dissoc';
import { passwordConfirm } from '../actions';
import { asReset } from '../actionHelpers';
import { PREFIX } from '../actionTypes';

const mapDispathToProps = (dispatch, props) => bindActionCreators({
    onSubmit: (payload) => {
        payload = dissoc('passwordConfirm', payload);
        return passwordConfirm(payload, {url: props.url})
    },
    clearMeta: compose(asReset, passwordConfirm)
}, dispatch);

@connect(null, mapDispathToProps)
@reduxForm({form: PREFIX + 'passwordConfirm'})
export class PasswordConfirm extends Component {
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
