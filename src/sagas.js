import {takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {LOGIN, SET_PASSWORD, SEND_RECOVERY_EMAIL, PASSWORD_CONFIRM, login, setPassword, sendRecoveryEmail, passwordConfirm} from './actions';
import {createRequestGenerator} from './utils/redux';

export function getSagas() {
    return [
        takeLatest(
            LOGIN,
            createRequestGenerator(login, ({url, payload}) => () => {
                const {code, login: username, password} = payload;

                return axios.post(url, { code }, { auth: {username, password} })
            })
        ),
        takeLatest(
            SET_PASSWORD,
            createRequestGenerator(setPassword, ({url, payload}) => () => {
                return axios.post(url, payload)
            })
        ),
        takeLatest(
            SEND_RECOVERY_EMAIL,
            createRequestGenerator(sendRecoveryEmail, ({url, payload}) => () => {
                return axios.post(url, payload)
            })
        ),
        takeLatest(
            PASSWORD_CONFIRM,
            createRequestGenerator(passwordConfirm, ({url, payload}) => () => {
                return axios.post(url, payload)
            })
        )
    ]
}