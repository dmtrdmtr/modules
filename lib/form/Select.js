'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Select = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DropdownList = require('react-widgets/lib/DropdownList');

var _DropdownList2 = _interopRequireDefault(_DropdownList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Select = exports.Select = function (_Component) {
    (0, _inherits3.default)(Select, _Component);

    function Select() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Select);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Select.__proto__ || (0, _getPrototypeOf2.default)(Select)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (value) {
            var _this$props = _this.props,
                onChange = _this$props.input.onChange,
                valueField = _this$props.valueField;


            onChange(value[valueField] || value);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Select, [{
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


            return _react2.default.createElement(
                'div',
                { className: 'select' },
                _react2.default.createElement(_DropdownList2.default, { data: options,
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
}(_react.Component);

Select.propTypes = {
    input: _react.PropTypes.object,
    meta: _react.PropTypes.object,
    valueField: _react.PropTypes.string,
    textField: _react.PropTypes.string,
    messages: _react.PropTypes.object,
    placeholder: _react.PropTypes.string,
    options: _react.PropTypes.array
};

Select.defaultProps = {
    valueField: 'id',
    textField: 'name',
    messages: {
        emptyList: 'Нет значений'
    }
};