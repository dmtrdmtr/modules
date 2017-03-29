var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export var Input = function (_Component) {
    _inherits(Input, _Component);

    function Input() {
        _classCallCheck(this, Input);

        return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
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