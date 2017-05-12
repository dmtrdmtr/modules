import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Input extends Component {
    componentWillUnmount() {
        const { onChange } = this.props.input;

        onChange('');
    }

    render() {
        const { input, type, placeholder, meta: { invalid, submitFailed, error }} = this.props;

        return (
            <div className={classNames('input', {'error': invalid && submitFailed})}>
                <input {...input}
                       type={type}
                       className="form-control"
                       placeholder={placeholder} />
                <div>{submitFailed && error}</div>
            </div>
        );
    }
}

Input.propTypes = {
    input: PropTypes.object,
    meta: PropTypes.object,
    type: PropTypes.string,
    placeholder: PropTypes.string
};
