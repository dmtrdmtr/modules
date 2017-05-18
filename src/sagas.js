import { takeLatest } from 'redux-saga/effects';
import { login, sendRecoveryEmail, passwordConfirm } from './actions';
import { LOGIN, SEND_RECOVERY_EMAIL, PASSWORD_CONFIRM } from './actionTypes';
import { requestGenerator } from './utils/redux';

export function getSagas() {
    return [
        takeLatest(LOGIN, requestGenerator, login),
        takeLatest(SEND_RECOVERY_EMAIL, requestGenerator, sendRecoveryEmail),
        takeLatest(PASSWORD_CONFIRM, requestGenerator, passwordConfirm)
    ];
}
