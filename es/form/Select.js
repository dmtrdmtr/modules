import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component, PropTypes } from 'react';
import DropdownList from 'react-widgets/lib/DropdownList';

export var Select = function (_Component) {
    _inherits(Select, _Component);

    function Select() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Select);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Select.__proto__ || _Object$getPrototypeOf(Select)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (value) {
            var _this$props = _this.props,
                onChange = _this$props.input.onChange,
                valueField = _this$props.valueField;


            onChange(value[valueField] || value);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Select, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var onChange = this.props.input.onChange;


            onChange('');
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                options = _props.options,
                placeholder = _props.placeholder,
                messages = _props.messages,
                value = _props.input.value,
                valueField = _props.valueField,
                textField = _props.textField;


            return React.createElement(
                'div',
                { className: 'select' },
                React.createElement(DropdownList, { data: options,
                    value: value,
                    valueField: valueField,
                    textField: textField,
                    placeholder: placeholder,
                    messages: messages,
                    onChange: this.onChange })
            );
        }
    }]);

    return Select;
}(Component);

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