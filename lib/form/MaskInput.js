'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MaskInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactMaskedinput = require('react-maskedinput');

var _reactMaskedinput2 = _interopRequireDefault(_reactMaskedinput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MaskInput = exports.MaskInput = function (_Component) {
    _inherits(MaskInput, _Component);

    function MaskInput() {
        _classCallCheck(this, MaskInput);

        return _possibleConstructorReturn(this, (MaskInput.__proto__ || Object.getPrototypeOf(MaskInput)).apply(this, arguments));
    }

    _createClass(MaskInput, [{
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
                error = _props$meta.error,
                mask = _props.mask;


            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('input', { 'error': invalid && submitFailed }) },
                _react2.default.createElement(_reactMaskedinput2.default, _extends({}, input, {
                    type: type,
                    placeholder: placeholder,
                    mask: mask })),
                _react2.default.createElement(
                    'div',
                    null,
                    submitFailed && error
                )
            );
        }
    }]);

    return MaskInput;
}(_react.Component);

MaskInput.propTypes = {
    input: _react.PropTypes.object,
    meta: _react.PropTypes.object,
    type: _react.PropTypes.string,
    placeholder: _react.PropTypes.string,
    mask: _react.PropTypes.string
};