'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Input = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = exports.Input = function (_Component) {
    (0, _inherits3.default)(Input, _Component);

    function Input() {
        (0, _classCallCheck3.default)(this, Input);
        return (0, _possibleConstructorReturn3.default)(this, (Input.__proto__ || (0, _getPrototypeOf2.default)(Input)).apply(this, arguments));
    }

    (0, _createClass3.default)(Input, [{
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


            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('input', { 'error': invalid && submitFailed }) },
                _react2.default.createElement('input', (0, _extends3.default)({}, input, {
                    type: type,
                    placeholder: placeholder })),
                _react2.default.createElement(
                    'div',
                    null,
                    submitFailed && error
                )
            );
        }
    }]);
    return Input;
}(_react.Component);

Input.propTypes = {
    input: _react.PropTypes.object,
    meta: _react.PropTypes.object,
    type: _react.PropTypes.string,
    placeholder: _react.PropTypes.string
};