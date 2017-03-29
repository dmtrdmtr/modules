import { takeLatest } from 'redux-saga/effects';
import { LOGIN, SET_PASSWORD } from '../constants/actions';
import { createRequestGenerator, createAction } from '../utils/redux';
import axios from 'axios';

export function getSagas() {
    return [takeLatest(LOGIN, createRequestGenerator(createAction(LOGIN), function (_ref) {
        var url = _ref.url,
            payload = _ref.payload;
        return function () {
            var code = payload.code,
                username = payload.email,
                password = payload.password;


            return axios.post(url, { code: code }, { auth: { username: username, password: password } });
        };
    })), takeLatest(SET_PASSWORD, createRequestGenerator(createAction(SET_PASSWORD), function (_ref2) {
        var url = _ref2.url,
            payload = _ref2.payload;
        return function () {
            return axios.post(url, payload);
        };
    }))];
}