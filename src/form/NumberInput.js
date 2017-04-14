import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class NumberInput extends Component {
    componentWillUnmount() {
        const { onChange } = this.props.input;

        onChange('');
    }

    onChange = e => {
        const { onChange } = this.props.input;
        const value = parseInt(e.target.value, 10) || 0;

        onChange(value);
    }

    render() {
        const { input: { name }, placeholder } = this.props;

        return (
            <input name={name}
                   type='number'
                   placeholder={placeholder}
                   onChange={this.onChange} />
        );
    }
}

NumberInput.propTypes = {
    input: PropTypes.object,
    meta: PropTypes.object,
    placeholder: PropTypes.string
};
