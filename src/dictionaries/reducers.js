import path from 'ramda/src/path';

import { createListReducer } from '../createListReducer';
import { createMetaReducer, createMetaActionTypes } from '../createMetaReducer';
import { toSuccess } from '../actionHelpers';
import { GET_DICTIONARY } from '../actionTypes';

const storeByRequestUrl = path(['requestAction', 'attrs', 'url']);
const dictionaryReducer = (state = [], action) => action.payload || state;

export const dictionariesReducer = createListReducer(
    [toSuccess(GET_DICTIONARY)],
    storeByRequestUrl,
    dictionaryReducer
);

export const dictionariesMetaReducer = createListReducer(
    createMetaActionTypes(GET_DICTIONARY),
    storeByRequestUrl,
    createMetaReducer({ get: GET_DICTIONARY })
);
