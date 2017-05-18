import {all, is, mapObjIndexed, cond, always, map, unless, of , adjust, T, compose, both, equals, length} from 'ramda';
import {isPlainObject} from '../utils/ramdaAdditions';
import checkValidity from './validateModel';

const isArrayOfOneItem = compose(equals(1), length);

const unifyCondition = adjust(unless(is(Function), always), 1);

const createCondition = compose(
    cond,
    map(unifyCondition),
    unless(all(is(Array)), of)
);

const wrapNestedValidator = validatorFn => {
    return (obj, path, model) => checkValidity(model)(obj, validatorFn.schema, path)
};

/* eslint-disable no-use-before-define */
const buildSchema = rules => mapObjIndexed(createConditionOrRecall, rules);
/* eslint-enable no-use-before-define */

const createConditionOrRecall = cond([
    [is(Function), wrapNestedValidator],
    [both(isArrayOfOneItem, all(is(Function))), map(wrapNestedValidator)],
    [isPlainObject, buildSchema],
    [all(isPlainObject), map(buildSchema)],
    [T, createCondition]
]);

export default buildSchema;
