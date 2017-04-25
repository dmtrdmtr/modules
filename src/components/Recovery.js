import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/lib/connect/connect';
import { reduxForm, propTypes as formPropTypes } from 'redux-form';
import compose from 'ramda/src/compose';
import { sendRecoveryEmail } from '../actions';
import { asReset } from '../actionHelpers';
import { PREFIX } from '../actionTypes';

const mapStateToProps = ( {modules} ) => ({
    meta: modules.meta.recovery.post
});

const mapDispathToProps = (dispatch, props) => bindActionCreators({
    onSubmit: (payload) => sendRecoveryEmail(payload, {url: props.url}),
    clearMeta: compose(asReset, sendRecoveryEmail)
}, dispatch);

@connect(mapStateToProps, mapDispathToProps)
@reduxForm({form: PREFIX + 'recovery'})
export class Recovery extends Component {
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
