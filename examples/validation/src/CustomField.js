import React from 'react';
import cx from 'classnames';

const CustomField = ({ label, input, meta }) => (
    <div className={cx({ 'error': meta.invalid })}>
        <label>{label}</label>
        <input {...input} />
        <span>{ meta.error }</span>
    </div>
);

export default CustomField;
