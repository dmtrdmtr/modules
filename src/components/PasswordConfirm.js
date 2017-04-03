import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/lib/connect/connect';
import { reduxForm, propTypes as formPropTypes } from 'redux-form';
import assoc from 'ramda/src/assoc';
import compose from 'ramda/src/compose';
import dissoc from 'ramda/src/dissoc';
import { passwordConfirm, PREFIX, asReset } from '../actions';

const mapDispathToProps = (dispatch, props) => bindActionCreators({
    onSubmit: compose(assoc('url', props.url), passwordConfirm, dissoc('passwordConfirm')),
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
