import equal from 'deep-equal';
import { not, lt } from 'ramda';
import {validate} from '../src/validator';

const required = [ not, 'error. required' ];
const less6 = [ lt(6), 'error. over 6' ];
const belowModelAge = [ (v, keys, model) =>  v < model.age, 'error. depending on the model' ];
const notJerry = [v => v === 'Jerry', 'error. Is Jerry'];
const isTom = [v => v !== 'Tom', 'error. Not Tom'];
const requiredIfFirst = [ (v, [, idx]) =>  idx === '0' && !v, 'error. first is required' ];

const getMsg = ([, msg]) => msg;

describe('validate()', () => {
    it('should validate values with validate schema like object', () => {
        const schema = {
            id: less6,
            name: required,
            todo: {
                title: required,
                text: {
                    full: required
                }
            }
        };

        const model = { id: 10, name: '', todo: { title: '' }, fullname: ''};
        const errors = { id: getMsg(less6), name: getMsg(required), todo: { title: getMsg(required), text: { full: getMsg(required) }}};
        const result = validate(schema)(model);

        expect( equal(result, errors) ).toBeTruthy();
    });

    it('should correctly validate null value', () => {
        const schema = {
            items: [ {id: required} ]
        };

        const model = {items: null};
        const errors = {items: {}};
        const result = validate(schema)(model);

        expect( equal(result, errors) ).toBeTruthy();
    });

    describe('should validate values with validate schema like object with array of validators', () => {
        it('should handle first validator in array', () => {
            const schema = {
                id: [required, less6],
                name: required,
                todo: {
                    title: required
                }
            };

            const model = { id: null, name: '', todo: { title: '' }};
            const errors = { id: getMsg(required), name: getMsg(required), todo: { title: getMsg(required) } };
            const result = validate(schema)(model);

            expect( equal(result, errors) ).toBeTruthy();
        });

        it('should handle second validator in array', () => {
            const schema = {
                id: [required, less6],
                name: required,
                todo: {
                    title: required
                }
            };

            const model = { id: 10, name: '', todo: { title: '' }};
            const errors = { id: getMsg(less6), name: getMsg(required), todo: { title: getMsg(required) } };
            const result = validate(schema)(model);

            expect( equal(result, errors) ).toBeTruthy();
        });
    });

    it('should validate schema with array items rule', () => {
        const schema = {
            items: [
                { name: required }
            ]
        };
        const model = {
            items: [
                { name: '' },
                { name: 'name' },
                { name: '' }
            ]
        };
        const errors = {
            items: {
                '0': { name: getMsg(required) },
                '1': { name: undefined },
                '2': { name: getMsg(required) }
            }
        };
        const result = validate(schema)(model);

        expect( equal(result, errors) ).toBeTruthy();
    });

    it('should validate depending on the model values', () => {
        const schema = {
            persons: [
                {
                    age: belowModelAge
                }
            ]
        };

        const model = {
            persons: [
                {
                    age: 23
                },
                {
                    age: 18
                }
            ],
            age: 20
        };

        const errors = {
            persons: {
                '0': { age: undefined },
                '1': { age: getMsg(belowModelAge) }
            }
        };
        const result = validate(schema)(model);

        expect( equal(result, errors) ).toBeTruthy();
    });

    describe('should validate with nested validators', () => {
        it('should validate with nested schemas', () => {
            const schema = validate({
                mouse: validate({
                    name: [required, notJerry],
                    age: belowModelAge
                }),
                cat: validate({
                    name: isTom,
                    age: belowModelAge
                })
            });

            const model = {
                age: 4,
                mouse: {
                    name: 'Jerry',
                    age: 2
                },
                cat: {
                    name: 'Tom',
                    age: 5
                }
            };

            const errors = {
                mouse: {
                    name: getMsg(notJerry),
                    age: getMsg(belowModelAge)
                },
                cat: {
                    name: undefined,
                    age: undefined
                }
            };

            const result = schema(model);

            expect( equal(result, errors) ).toBeTruthy();
        });

        it('should validate array with nested schemas depending on index', () => {
            const schema = validate({
                items: [
                    validate({
                        id: requiredIfFirst,
                        name: [required, notJerry],
                        age: belowModelAge
                    })
                ]
            });

            const model = {
                items: [
                    {
                        id: null,
                        age: 22,
                        name: 'Jerry'
                    },
                    {
                        id: null,
                        age: 18,
                        name: 'Tom'
                    }
                ],
                age: 20
            };

            const errors = {
                items: {
                    '0': {
                        id: getMsg(requiredIfFirst),
                        name: getMsg(notJerry),
                        age: undefined
                    },
                    '1': {
                        id: undefined,
                        name: undefined,
                        age: getMsg(belowModelAge)
                    }
                }
            };

            const result = schema(model);

            expect( equal(result, errors) ).toBeTruthy();
        });
    });
});
