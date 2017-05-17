import React, { Component } from 'react';
import { reduxForm, Field, FieldArray } from 'redux-form';
import {validate} from '../../../src/validator';

import CustomField from './CustomField';

const required = [ v => !v, 'required' ];
const number = [ v => v > 10, 'large then 10' ];
const moreNumber = [ (v, model) => model.age > 10, 'large age' ];

const schema = {
    age: [required, number],
    todo: {
        title: [required, moreNumber]
    },
    user: {
        name: {
            full: required
        }
    },
    user: {
        pets: {
            dog: required,
            cat: {
                name: required
            }
        }
    },
    one: [
        {
            two: required
        }
    ]
};

@reduxForm({
    form: 'example',
    validate: validate(schema)
})
export default class Form extends Component {
    renderArray({ fields }) {
        return (
            <ul>
                { fields.map((field, index) =>
                    <li key={index}>
                        <Field name={`${field}.one`}
                               component={CustomField}
                               label={`${field}.one`} />
                        <Field name={`${field}.two`}
                               component={CustomField}
                               label={`${field}.two`} />
                        <Field name={`${field}.three`}
                               component={CustomField}
                               label={`${field}.three`} />
                           <button type='button' onClick={() => fields.remove(index)}>remove</button>
                    </li>
                )}
                <button type='button' onClick={() => fields.push()}>add</button>
            </ul>
        );
    }

    render() {
        const { valid } = this.props;

        return (
            <form>
                <h3>Form is <span>{valid ? 'valid' : 'invalid'}</span></h3>
                <div>
                    <h1>Fields</h1>
                    <Field name='age'
                           component={CustomField}
                           label='age'
                           parse={v => v ? Number(v) : null} />
                    <Field name='todo.title'
                           component={CustomField}
                           label='todo.title' />
                    <Field name='user.name.full'
                           component={CustomField}
                           label='user.name.full' />
                    <Field name='user.pets.dog'
                           component={CustomField}
                           label='user.pets.dog' />
                    <Field name='user.pets.cat.name'
                           component={CustomField}
                           label='user.pets.cat.name' />
                </div>
                <div>
                    <h1>Array Fields</h1>
                    <div>
                        <h3>One</h3>
                        <FieldArray name='one'
                                    component={this.renderArray} />
                    </div>
                    <div>
                        <h3>Two</h3>
                        <FieldArray name='two'
                                    component={this.renderArray} />
                    </div>
                </div>
            </form>
        );
    }
}
