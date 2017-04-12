import evolve from 'ramda/src/evolve';
import concat from 'ramda/src/concat';
import __ from 'ramda/src/__';

export const toError = concat(__, '_ERROR');
export const toRequest = concat(__, '_REQUEST');
export const toSuccess = concat(__, '_SUCCESS');
export const toReset = concat(__, '_RESET');

const setStatus = statusFn => evolve({ type: statusFn });

export const asError = setStatus(toError);
export const asRequest = setStatus(toRequest);
export const asSuccess = setStatus(toSuccess);
export const asReset = setStatus(toReset);

export const createAction = (type, staticPayload) => (payload = null, attrs = null) => {
    return {
        type,
        payload: staticPayload || payload,
        attrs
    };
};
