import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component, PropTypes } from 'react';

export var NumberInput = function (_Component) {
    _inherits(NumberInput, _Component);

    function NumberInput() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, NumberInput);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NumberInput.__proto__ || _Object$getPrototypeOf(NumberInput)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (e) {
            var onChange = _this.props.input.onChange;

            var value = parseInt(e.target.value, 10) || 0;

            onChange(value);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(NumberInput, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var onChange = this.props.input.onChange;


            onChange('');
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                name = _props.input.name,
                placeholder = _props.placeholder;


            return React.createElement('input', { name: name,
                type: 'number',
                placeholder: placeholder,
                onChange: this.onChange });
        }
    }]);

    return NumberInput;
}(Component);

NumberInput.propTypes = {
    input: PropTypes.object,
    meta: PropTypes.object,
    placeholder: PropTypes.string
};