import {takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {LOGIN, SET_PASSWORD, SEND_RECOVERY_EMAIL, login, setPassword, sendRecoveryEmail} from './actions';
import {createRequestGenerator} from './utils/redux';

export function getSagas() {
    return [
        takeLatest(
            LOGIN,
            createRequestGenerator(login, ({url, payload}) => () => {
                const {code, email: username, password} = payload;

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
        )
    ]
}