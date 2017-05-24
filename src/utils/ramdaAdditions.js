import is from 'ramda/src/is';
import omit from 'ramda/src/omit';
import until from 'ramda/src/until';
import ifElse from 'ramda/src/ifElse';
import isNil from 'ramda/src/isNil';
import of from 'ramda/src/of';

export const isPlainObject = v => is(Object, v) && v.constructor === Object;

export const exceptComponentsProps = (constructor, props, options = {}) => {
    return omit(Object.keys(options.except || constructor.propTypes), props);
};

export const toArray = until(is(Array), ifElse(isNil, () => [], of));
