import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Radio extends Component {
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
        const { options, valueField, textField, input: { value }} = this.props;

        return (
            <div className='radio'>{options.map((option, index) =>
                <label key={index}>
                    <input type='radio'
                           value={option[valueField]}
                           onChange={this.onChange}
                           checked={option[valueField] === value} />
                           {option[textField]}
                </label>
            )}</div>
        );
    }
}

Radio.propTypes = {
    input: PropTypes.object,
    meta: PropTypes.object,
    options: PropTypes.array,
    valueField: PropTypes.string,
    textField: PropTypes.string
};

Radio.defaultProps = {
    valueField: 'id',
    textField: 'name'
};
