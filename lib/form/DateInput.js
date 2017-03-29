'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DateInput = undefined;

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

var _DateTimePicker = require('react-widgets/lib/DateTimePicker');

var _DateTimePicker2 = _interopRequireDefault(_DateTimePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import moment from 'moment';
// import momentLocalizer from 'react-widgets/lib/localizers/moment';
// import 'react-widgets/dist/css/react-widgets.css';
// momentLocalizer(moment);

var DateInput = exports.DateInput = function (_Component) {
    (0, _inherits3.default)(DateInput, _Component);

    function DateInput() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, DateInput);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DateInput.__proto__ || (0, _getPrototypeOf2.default)(DateInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(DateInput, [{
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