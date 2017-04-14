import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DropdownList from 'react-widgets/lib/DropdownList';

export class Select extends Component {
    componentWillUnmount() {
        const { onChange } = this.props.input;

        onChange('');
    }

    onChange = value => {
        const { input: { onChange }, valueField } = this.props;

        onChange(value[valueField] || value);
    }

    render() {
        const { options, placeholder, messages, input: { value }, valueField, textField } = this.props;

        return (
            <div className='select'>
                <DropdownList data={options}
                              value={value}
                              valueField={valueField}
                              textField={textField}
                              placeholder={placeholder}
                              messages={messages}
                              onChange={this.onChange} />
            </div>
        );
    }
}

Select.propTypes = {
    input: PropTypes.object,
    meta: PropTypes.object,
    valueField: PropTypes.string,
    textField: PropTypes.string,
    messages: PropTypes.object,
    placeholder: PropTypes.string,
    options: PropTypes.array
};

Select.defaultProps = {
    valueField: 'id',
    textField: 'name',
    messages: {
        emptyList: 'Нет значений'
    }
};
