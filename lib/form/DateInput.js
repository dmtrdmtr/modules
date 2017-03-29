'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DateInput = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DateTimePicker = require('react-widgets/lib/DateTimePicker');

var _DateTimePicker2 = _interopRequireDefault(_DateTimePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import moment from 'moment';
// import momentLocalizer from 'react-widgets/lib/localizers/moment';
// import 'react-widgets/dist/css/react-widgets.css';
// momentLocalizer(moment);

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
            var onChange = _this.props.input.onChange;


            onChange(date);
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
                format = _props.format,
                value = _props.input.value,
                placeholder = _props.placeholder;


            return _react2.default.createElement(
                'div',
                { ref: 'datepicker',
                    className: 'datepicker',
                    onFocus: this.onFocus },
                _react2.default.createElement(_DateTimePicker2.default, { initialView: initialView,
                    finalView: finalView,
                    value: value,
                    format: format,
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
    input: _react.PropTypes.object,
    meta: _react.PropTypes.object,
    value: _react.PropTypes.string,
    initialView: _react.PropTypes.string,
    finalView: _react.PropTypes.string,
    placeholder: _react.PropTypes.string,
    format: _react.PropTypes.string
};

DateInput.defaultProps = {
    initialView: 'month', // month, year, decade, century
    finalView: 'century', // month, year, decade, century
    format: 'DD MMMM YYYY'
};