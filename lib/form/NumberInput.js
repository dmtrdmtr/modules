'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NumberInput = undefined;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NumberInput = exports.NumberInput = function (_Component) {
    (0, _inherits3.default)(NumberInput, _Component);

    function NumberInput() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, NumberInput);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = NumberInput.__proto__ || (0, _getPrototypeOf2.default)(NumberInput)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (e) {
            var onChange = _this.props.input.onChange;

            var value = parseInt(e.target.value, 10) || 0;

            onChange(value);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(NumberInput, [{
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


            return _react2.default.createElement('input', { name: name,
                type: 'number',
                placeholder: placeholder,
                onChange: this.onChange });
        }
    }]);
    return NumberInput;
}(_react.Component);

NumberInput.propTypes = {
    input: _react.PropTypes.object,
    meta: _react.PropTypes.object,
    placeholder: _react.PropTypes.string
};