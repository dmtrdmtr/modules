import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Textarea extends Component {
    componentWillUnmount() {
        const { onChange } = this.props.input;

        onChange('');
    }

    render() {
        const { input, placeholder, meta: { invalid, submitFailed, error }} = this.props;

        return (
            <div className={classNames('textarea', {'error': invalid && submitFailed})}>
                <textarea {...input}
                          placeholder={placeholder} >
                </textarea>
                <div>{submitFailed && error}</div>
            </div>
        );
    }
}

Textarea.propTypes = {
    input: PropTypes.object,
    meta: PropTypes.object,
    placeholder: PropTypes.string
};
