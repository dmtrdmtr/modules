import React, { Component, PropTypes } from 'react';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';

import moment from 'moment';
import momentLocalizer from 'react-widgets/lib/localizers/moment';
momentLocalizer(moment);

export class DateInput extends Component {
    state = {
        isOpened: false
    };

    componentWillUnmount() {
        const { onChange } = this.props.input;

        onChange('');
    }

    componentDidUpdate() {
        if (!this.state.isOpened) {
            this.refs.datepicker.querySelector('input').blur();
        }
    }

    onFocus = () => {
        let isOpened = this.refs.datepicker.querySelector('.rw-open');

        if (!isOpened) {
            this.setState({ isOpened: 'calendar' });
        }
    }

    onChange = date => {
        const { input: { onChange }, dateFormat } = this.props;

        onChange(moment(date).format(dateFormat));
        this.onToggle();
    }

    onToggle = () => {
        this.setState({ isOpened: false });
    }

    render() {
        const { initialView, finalView, viewFormat, dateFormat, input: { value }, placeholder } = this.props;

        return (
            <div ref='datepicker'
                 className='datepicker'
                 onFocus={this.onFocus}>
                 <DateTimePicker initialView={initialView}
                                 finalView={finalView}
                                 value={value !== ''? moment(value, dateFormat).toDate() : null}
                                 format={viewFormat}
                                 calendar={false}
                                 time={false}
                                 open={this.state.isOpened}
                                 onToggle={this.onToggle}
                                 onChange={this.onChange}
                                 placeholder={placeholder} />
            </div>
        );
    }
}

DateInput.propTypes = {
    input: PropTypes.object,
    meta: PropTypes.object,
    value: PropTypes.string,
    initialView: PropTypes.string,
    finalView: PropTypes.string,
    placeholder: PropTypes.string,
    viewFormat: PropTypes.string,
    dateFormat: PropTypes.string
};

DateInput.defaultProps = {
    initialView: 'month',       // month, year, decade, century
    finalView: 'century',       // month, year, decade, century
    viewFormat: 'DD MMMM YYYY',
    dateFormat: 'DDMMYYYY'
};
