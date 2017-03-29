import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component, PropTypes } from 'react';

export var Radio = function (_Component) {
    _inherits(Radio, _Component);

    function Radio() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Radio);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Radio.__proto__ || _Object$getPrototypeOf(Radio)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (e) {
            var onChange = _this.props.input.onChange;

            var value = parseInt(e.target.value, 10) || 0;

            onChange(value);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Radio, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var onChange = this.props.input.onChange;


            onChange('');
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                options = _props.options,
                valueField = _props.valueField,
                textField = _props.textField,
                value = _props.input.value;


            return React.createElement(
                'div',
                { className: 'radio' },
                options.map(function (option, index) {
                    return React.createElement(
                        'label',
                        { key: index },
                        React.createElement('input', { type: 'radio',
                            value: option[valueField],
                            onChange: _this2.onChange,
                            checked: option[valueField] === value }),
                        option[textField]
                    );
                })
            );
        }
    }]);

    return Radio;
}(Component);

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