import _extends from 'babel-runtime/helpers/extends';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export var Input = function (_Component) {
    _inherits(Input, _Component);

    function Input() {
        _classCallCheck(this, Input);

        return _possibleConstructorReturn(this, (Input.__proto__ || _Object$getPrototypeOf(Input)).apply(this, arguments));
    }

    _createClass(Input, [{
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
                type = _props.type,
                placeholder = _props.placeholder,
                _props$meta = _props.meta,
                invalid = _props$meta.invalid,
                submitFailed = _props$meta.submitFailed,
                error = _props$meta.error;


            return React.createElement(
                'div',
                { className: classNames('input', { 'error': invalid && submitFailed }) },
                React.createElement('input', _extends({}, input, {
                    type: type,
                    placeholder: placeholder })),
                React.createElement(
                    'div',
                    null,
                    submitFailed && error
                )
            );
        }
    }]);

    return Input;
}(Component);

Input.propTypes = {
    input: PropTypes.object,
    meta: PropTypes.object,
    type: PropTypes.string,
    placeholder: PropTypes.string
};