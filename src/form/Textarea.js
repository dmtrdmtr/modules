import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class Textarea extends Component {
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
