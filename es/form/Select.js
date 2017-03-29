var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (value) {
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