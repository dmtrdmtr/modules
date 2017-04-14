'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DateInput = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DateTimePicker = require('react-widgets/lib/DateTimePicker');

var _DateTimePicker2 = _interopRequireDefault(_DateTimePicker);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _moment3 = require('react-widgets/lib/localizers/moment');

var _moment4 = _interopRequireDefault(_moment3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _moment4.default)(_moment2.default);

var DateInput = exports.DateInput = function (_Component) {
    _inherits(DateInput, _Component);

    function DateInput() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, DateInput);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DateInput.__proto__ || Object.getPrototypeOf(DateInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            isOpened: false
        }, _this.onFocus = function () {
            var isOpened = _this.refs.datepicker.querySelector('.rw-open');

            if (!isOpened) {
                _this.setState({ isOpened: 'calendar' });
            }
        }, _this.onChange = function (date) {
            var _this$props = _this.props,
                onChange = _this$props.input.onChange,
                dateFormat = _this$props.dateFormat;


            onChange((0, _moment2.default)(date).format(dateFormat));
            _this.onToggle();
        }, _this.onToggle = function () {
            _this.setState({ isOpened: false });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(DateInput, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var onChange = this.props.input.onChange;


            onChange('');
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (!this.state.isOpened) {
                this.refs.datepicker.querySelector('input').blur();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                initialView = _props.initialView,
                finalView = _props.finalView,
                viewFormat = _props.viewFormat,
                dateFormat = _props.dateFormat,
                value = _props.input.value,
                placeholder = _props.placeholder;


            return _react2.default.createElement(
                'div',
                { ref: 'datepicker',
                    className: 'datepicker',
                    onFocus: this.onFocus },
                _react2.default.createElement(_DateTimePicker2.default, { initialView: initialView,
                    finalView: finalView,
                    value: value !== '' ? (0, _moment2.default)(value, dateFormat).toDate() : null,
                    format: viewFormat,
                    calendar: false,
                    time: false,
                    open: this.state.isOpened,
                    onToggle: this.onToggle,
                    onChange: this.onChange,
                    placeholder: placeholder })
            );
        }
    }]);

    return DateInput;
}(_react.Component);

DateInput.propTypes = {
    input: _propTypes2.default.object,
    meta: _propTypes2.default.object,
    value: _propTypes2.default.string,
    initialView: _propTypes2.default.string,
    finalView: _propTypes2.default.string,
    placeholder: _propTypes2.default.string,
    viewFormat: _propTypes2.default.string,
    dateFormat: _propTypes2.default.string
};

DateInput.defaultProps = {
    initialView: 'month', // month, year, decade, century
    finalView: 'century', // month, year, decade, century
    viewFormat: 'DD MMMM YYYY',
    dateFormat: 'DDMMYYYY'
};