import {mapObjIndexed, is, propOr} from 'ramda';
import {isPlainObject} from '../utils/ramdaAdditions';

const sameConditionForEvery = (condition, value) => {
    return value.reduce((accum, _, i) => {
        accum[i] = condition;
        return accum;
    }, {});
};

const checkValidity = model => {
    const validateObject = (obj, objSchema, path) => mapObjIndexed((condition, key) => {
        const value = propOr(null, key, obj);
        const valuePath = [key, ...path];

        if (is(Array, value)) {
            condition = sameConditionForEvery(condition[0], value);
        }

        return isPlainObject(condition)
            ? validateObject(value, condition, valuePath)
            : condition(value, valuePath, model);
    }, objSchema);

    return validateObject;
};

export default checkValidity;
