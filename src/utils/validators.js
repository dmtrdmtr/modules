import not from 'ramda/src/not';
import always from 'ramda/src/always';
import complement from 'ramda/src/complement';
import either from 'ramda/src/either';
import gt from 'ramda/src/gt';
import lt from 'ramda/src/lt';
import length from 'ramda/src/length';
import compose from 'ramda/src/compose';
import test from 'ramda/src/test';
import curry from 'ramda/src/curry';
import whereEq from 'ramda/src/whereEq';

import {EMAIL} from '../constants/patterns';

export const required = [ not, always('required') ];
export const email = [ complement(test(EMAIL)), always('email') ];

const passOutOfRange = either(gt(6), lt(15));
export const password = [ compose(passOutOfRange, length), always('password') ];

export const conformsTo = curry((key, value) => whereEq({[key]: value}));
