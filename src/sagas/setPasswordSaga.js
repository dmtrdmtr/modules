import {takeLatest} from 'redux-saga/effects';
import {SET_PASSWORD} from '../constants/actions';
import {createRequestGenerator, createAction} from '../utils/redux';
import axios from 'axios';

export default takeLatest(
    SET_PASSWORD,
    createRequestGenerator(createAction(SET_PASSWORD), ({url, payload}) => () => {
        return axios.post(url, payload)
    })
)