import path from 'ramda/src/path';

import { createListReducer } from '../createListReducer';
import { createMetaReducer, createMetaActionTypes } from '../createMetaReducer';
import { DOCUMENT_UPLOAD, DOCUMENT_REMOVE, DOCUMENT_UPDATE } from '../actionTypes';
import { toSuccess } from "../actionHelpers";
import { combineReducers } from "redux";

const storeByUid = path(['attrs', 'uid']);
const storeByRequestActionUid = path(['requestAction', 'attrs', 'uid']);

const documentReducer = (state, { payload = null }) => payload;

const attachedFileReducer = createListReducer(
    [DOCUMENT_UPDATE],
    storeByUid,
    documentReducer
);

const documentKeyReducer = createListReducer(
    [toSuccess(DOCUMENT_UPLOAD), toSuccess(DOCUMENT_REMOVE)],
    storeByRequestActionUid,
    documentReducer
);

export const documentsReducer = combineReducers({
    attachedFile: attachedFileReducer,
    documentKey: documentKeyReducer
});

export const documentsMetaReducer = createListReducer(
    createMetaActionTypes([DOCUMENT_UPLOAD, DOCUMENT_REMOVE]),
    storeByRequestActionUid,
    createMetaReducer({ post: DOCUMENT_UPLOAD, delete: DOCUMENT_REMOVE })
);
