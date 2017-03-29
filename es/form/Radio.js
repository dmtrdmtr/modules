var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Radio.__proto__ || Object.getPrototypeOf(Radio)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (e) {
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