import _extends from 'babel-runtime/helpers/extends';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export var Textarea = function (_Component) {
    _inherits(Textarea, _Component);

    function Textarea() {
        _classCallCheck(this, Textarea);

        return _possibleConstructorReturn(this, (Textarea.__proto__ || _Object$getPrototypeOf(Textarea)).apply(this, arguments));
    }

    _createClass(Textarea, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var onChange = this.props.input.onChange;


            onChange('');
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                input = _props.input,
                placeholder = _props.placeholder,
                _props$meta = _props.meta,
                invalid = _props$meta.invalid,
                submitFailed = _props$meta.submitFailed,
                error = _props$meta.error;


            return React.createElement(
                'div',
                { className: classNames('textarea', { 'error': invalid && submitFailed }) },
                React.createElement('textarea', _extends({}, input, {
                    placeholder: placeholder })),
                React.createElement(
                    'div',
                    null,
                    submitFailed && error
                )
            );
        }
    }]);

    return Textarea;
}(Component);

Textarea.propTypes = {
    input: PropTypes.object,
    meta: PropTypes.object,
    placeholder: PropTypes.string
};