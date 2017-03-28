import login from './loginSaga'

const sagas = [
    login
];

export function* rootSaga() {
    yield sagas;
}

export default sagas;