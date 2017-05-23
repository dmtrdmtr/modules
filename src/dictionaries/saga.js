import path from 'ramda/src/path';

import { getDictionary } from '../actions';
import { GET_DICTIONARY } from '../actionTypes';
import { requestGenerator } from '../utils/redux';
import { takeFirst } from '../utils/saga';

const storedByActionUrl = path(['attrs', 'url']);

export const dictionariesSaga = takeFirst(
    GET_DICTIONARY,
    storedByActionUrl,
    requestGenerator,
    getDictionary
);
