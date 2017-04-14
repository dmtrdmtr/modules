import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MaskedInput from 'react-maskedinput';

export class MaskInput extends Component {
    componentWillUnmount() {
        const { onChange } = this.props.input;

        onChange('');
    }

    render() {
        const { input, type, placeholder, meta: { invalid, submitFailed, error }, mask } = this.props;

        return (
            <div className={classNames('input', {'error': invalid && submitFailed})}>
                <MaskedInput {...input}
                             type={type}
                             placeholder={placeholder}
                             mask={mask} />
                <div>{submitFailed && error}</div>
            </div>
        );
    }
}

MaskInput.propTypes = {
    input: PropTypes.object,
    meta: PropTypes.object,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    mask: PropTypes.string
};
