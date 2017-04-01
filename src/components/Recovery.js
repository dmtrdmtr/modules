import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/lib/connect/connect';
import { reduxForm, propTypes as formPropTypes } from 'redux-form';
import compose from 'ramda/src/compose';
import assoc from 'ramda/src/assoc';
import { sendRecoveryEmail, PREFIX, asReset } from '../actions';

const mapStateToProps = ( {modules} ) => ({
    meta: modules.meta.recovery
});

const mapDispathToProps = (dispatch, props) => bindActionCreators({
    onSubmit: compose(assoc('url', props.url), sendRecoveryEmail),
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
