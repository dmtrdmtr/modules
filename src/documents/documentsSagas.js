import { documentUpload, documentRemove } from '../actions';
import { DOCUMENT_UPLOAD, DOCUMENT_REMOVE } from '../actionTypes';
import { requestGenerator } from '../utils/redux';
import { takeEvery, call, select } from 'redux-saga/effects';
import { compose, filter, nth, toPairs, map } from 'ramda';

export const documentsSaga = [
    takeEvery(DOCUMENT_UPLOAD, requestGenerator, documentUpload),
    takeEvery(DOCUMENT_REMOVE, requestGenerator, documentRemove),
];

const callUpload = ([key, document]) => call(
    requestGenerator,
    documentUpload,
    documentUpload(document, { uid: key })
);

const filterDocuments = pred => compose( filter(compose(pred, nth(1))), toPairs );

export function* uploadDocumentsSaga(mustBeSaved) {
    const documents = yield select(state => state.modules.documents.attachedFile);

    return yield compose(
        map(callUpload),
        filterDocuments(mustBeSaved)
    )(documents);
}
