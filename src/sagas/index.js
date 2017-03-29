import {takeLatest} from 'redux-saga/effects';
import {LOGIN, SET_PASSWORD} from '../constants/actions';
import {createRequestGenerator, createAction} from '../utils/redux';
import axios from 'axios';

export function getSagas() {
    return [
        takeLatest(
            LOGIN,
            createRequestGenerator(createAction(LOGIN), ({url, payload}) => () => {
                const {code, email: username, password} = payload;

                return axios.post(url, { code }, { auth: {username, password} })
            })
        ),
        takeLatest(
            SET_PASSWORD,
            createRequestGenerator(createAction(SET_PASSWORD), ({url, payload}) => () => {
                return axios.post(url, payload)
            })
        )
    ]
}