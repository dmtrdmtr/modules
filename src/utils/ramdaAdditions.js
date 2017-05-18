import is from 'ramda/src/is';

export const isPlainObject = v => is(Object, v) && v.constructor === Object;
