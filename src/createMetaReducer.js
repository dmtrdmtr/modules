import map from 'ramda/src/map';
import toPairs from 'ramda/src/toPairs';
import cond from 'ramda/src/cond';
import append from 'ramda/src/append';
import compose from 'ramda/src/compose';
import T from 'ramda/src/T';
import F from 'ramda/src/F';
import unnest from 'ramda/src/unnest';
import always from 'ramda/src/always';
import propEq from 'ramda/src/propEq';
import converge from 'ramda/src/converge';
import prop from 'ramda/src/prop';
import ap from 'ramda/src/ap';
import { toReset, toRequest, toSuccess, toError } from './actionHelpers';
import {toArray} from "./utils/ramdaAdditions";

export const createMetaActionTypes = compose(
    ap([toRequest, toSuccess, toError, toReset]),
    toArray
);

export function createMetaReducer(actions) {
    const initialState = { get: {}, put: {}, post: {}, delete: {} };

    const actionSwitcher = map(([request, actionType]) => {
        const getMeta = converge((pending, success, error) => ({[request]: { pending, success, error }}));

        return [[propEq('type', toReset(actionType)), getMeta([F, F, F])],
                [propEq('type', toRequest(actionType)), getMeta([T, F, F])],
                [propEq('type', toSuccess(actionType)), getMeta([F, T, F])],
                [propEq('type', toError(actionType)), getMeta([F, F, prop('payload')])]];
    }, toPairs(actions));

    const switcher = cond(append([T, always({})], unnest(actionSwitcher)));

    return (state = initialState, action) => ({ ...state, ...switcher(action) });
}
