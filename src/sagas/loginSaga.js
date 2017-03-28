import {takeLatest} from 'redux-saga/effects';
import {LOGIN} from '../constants/actions';
import {createRequestGenerator, createAction} from '../utils/redux';
import axios from 'axios';

export default takeLatest(
    LOGIN,
    createRequestGenerator(createAction(LOGIN), ({url, payload}) => () => {
        const {code, email: username, password} = payload;

        return axios.post(url, { code }, { auth: {username, password} })
    })
)