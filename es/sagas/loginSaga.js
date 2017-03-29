import { takeLatest } from 'redux-saga/effects';
import { LOGIN } from '../constants/actions';
import { createRequestGenerator, createAction } from '../utils/redux';
import axios from 'axios';

export default takeLatest(LOGIN, createRequestGenerator(createAction(LOGIN), function (_ref) {
    var url = _ref.url,
        payload = _ref.payload;
    return function () {
        var code = payload.code,
            username = payload.email,
            password = payload.password;


        return axios.post(url, { code: code }, { auth: { username: username, password: password } });
    };
}));