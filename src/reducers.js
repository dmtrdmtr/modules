import { combineReducers } from 'redux';
import { createMetaReducer } from './createMetaReducer';
import { LOGIN, SEND_RECOVERY_EMAIL, PASSWORD_CONFIRM } from './actionTypes';
import { dictionariesReducer, dictionariesMetaReducer } from './dictionaries/reducers';
import { documentsReducer, documentsMetaReducer } from './documents/documentReducers';

const login = createMetaReducer({ post: LOGIN });
const recovery = createMetaReducer({ post: SEND_RECOVERY_EMAIL });
const passwordConfirm = createMetaReducer({ post: PASSWORD_CONFIRM });

export function getReducers() {
    return {
        modules: combineReducers({
            dictionaries: dictionariesReducer,
            documents: documentsReducer,
            meta: combineReducers({
                dictionaries: dictionariesMetaReducer,
                documents: documentsMetaReducer,
                login,
                recovery,
                passwordConfirm
            })
        })
    }
}
