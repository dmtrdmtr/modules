import React from 'react';
import pathOr from 'ramda/src/pathOr';
import path from 'ramda/src/path';
import has from 'ramda/src/has';
import prop from 'ramda/src/prop';
import ifElse from 'ramda/src/ifElse';
import compose from 'ramda/src/compose';
import assocPath from 'ramda/src/assocPath';

import { documentRemove, documentUpdate } from '../actions'

const getAttachedFiles = path(['modules', 'documents', 'attachedFile']);
const getDocumentKeys = path(['modules', 'documents', 'documentKey']);

let counter = 0;

export const uploader = (WrappedComponent) => {
    const uid = counter++;

    const passUid = (actionCreatorFn) => compose(
        assocPath(['attrs', 'uid'], uid),
        actionCreatorFn
    );

    const NaNIfAbsent = ifElse(has(uid), prop(uid), () => NaN);

    return (props) => <WrappedComponent {...props}
        documentUpdate={ passUid(documentUpdate) }
        documentRemove={ passUid(documentRemove) }
        selectAttachedFile={ compose(NaNIfAbsent, getAttachedFiles) }
        selectDocumentKey={ compose(NaNIfAbsent, getDocumentKeys) }
        selectDocumentMeta={ pathOr(null, ['modules', 'meta', 'documents', uid]) }
    />
};
