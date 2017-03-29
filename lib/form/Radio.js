'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Radio = undefined;

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

var Radio = exports.Radio = function (_Component) {
    (0, _inherits3.default)(Radio, _Component);

    function Radio() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Radio);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Radio.__proto__ || (0, _getPrototypeOf2.default)(Radio)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (e) {
            var onChange = _this.props.input.onChange;

            var value = parseInt(e.target.value, 10) || 0;

            onChange(value);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Radio, [{
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


            return _react2.default.createElement(
                'div',
                { className: 'radio' },
                options.map(function (option, index) {
                    return _react2.default.createElement(
                        'label',
                        { key: index },
                        _react2.default.createElement('input', { type: 'radio',
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
}(_react.Component);

Radio.propTypes = {
    input: _react.PropTypes.object,
    meta: _react.PropTypes.object,
    options: _react.PropTypes.array,
    valueField: _react.PropTypes.string,
    textField: _react.PropTypes.string
};

Radio.defaultProps = {
    valueField: 'id',
    textField: 'name'
};