import login from './loginSaga';
import setPassword from './setPasswordSaga';

export function getSagas() {
    return [login, setPassword];
}