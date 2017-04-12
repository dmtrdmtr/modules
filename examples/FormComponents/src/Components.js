import React, { Component, PropTypes } from 'react';
import {reduxForm, Field, propTypes as formPropTypes} from 'redux-form';
import {Input, MaskInput , DateInput, NumberInput, Radio, Select, Textarea} from 'experium-modules';

import moment from 'moment';
import momentLocalizer from 'react-widgets/lib/localizers/moment';
momentLocalizer(moment);

import 'react-widgets/dist/css/react-widgets.css';

class ComponentsForm extends Component {

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} noValidate>
                <label>
                    Input
                    <Field name='Input'
                           component={Input} />
                </label>
                <label>
                    Masked Input
                    <Field name='MaskInput'
                           component={MaskInput}
                           mask='+7(111)111-11-11' />
                </label>
                <label>
                    DateInput
                    <Field name='DateInput'
                           component={DateInput} />
                </label>
                <label>
                    NumberInput
                    <Field name='NumberInput'
                           component={NumberInput} />
                </label>
                <label>
                    Textarea
                    <Field name='Textarea'
                           component={Textarea} />
                </label>
                <label>
                    Select
                    <Field name='Select'
                           component={Select}
                           options={[{id: 1, name: '-'}, {id: 2, name: '--'}]} />
                </label>

                <button type='submit'>Войти</button>
            </form>
        );
    }
}

ComponentsForm.propTypes = formPropTypes;

ComponentsForm = reduxForm({
    form: 'ComponentsForm'
})(ComponentsForm);

export const Components = ComponentsForm;
