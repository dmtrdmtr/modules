import is from 'ramda/src/is';
import omit from 'ramda/src/omit';

export const isPlainObject = v => is(Object, v) && v.constructor === Object;

export const exceptComponentsProps = (constructor, props, options = {}) => {
    return omit(Object.keys(options.except || constructor.propTypes), props);
};
