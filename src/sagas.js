import { takeLatest } from 'redux-saga/effects';
import { login, setPassword, sendRecoveryEmail, passwordConfirm } from './actions';
import { LOGIN, SET_PASSWORD, SEND_RECOVERY_EMAIL, PASSWORD_CONFIRM } from './actionTypes';
import { requestGenerator } from './utils/redux';

export function getSagas() {
    return [
        takeLatest(LOGIN, requestGenerator, login),
        takeLatest(SET_PASSWORD, requestGenerator, setPassword),
        takeLatest(SEND_RECOVERY_EMAIL, requestGenerator, sendRecoveryEmail),
        takeLatest(PASSWORD_CONFIRM, requestGenerator, passwordConfirm)
    ];
}
