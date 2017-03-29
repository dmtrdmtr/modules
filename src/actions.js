import {createAction} from './utils/redux';
import evolve from 'ramda/src/evolve';
import concat from 'ramda/src/concat';
import __ from 'ramda/src/__';

export const toError = concat(__, '_ERROR');
export const toRequest = concat(__, '_REQUEST');
export const toSuccess = concat(__, '_SUCCESS');
export const toReset = concat(__, '_RESET');

const setStatus = statusFn => evolve({ type: statusFn });

export const asError = setStatus(toError);
export const asRequest = setStatus(toRequest);
export const asSuccess = setStatus(toSuccess);
export const asReset = setStatus(toReset);

export const PREFIX = '@@experium-modules/';

export const LOGIN = PREFIX + 'LOGIN';
export const SET_PASSWORD = PREFIX + 'SET_PASSWORD';
export const SEND_RECOVERY_EMAIL = PREFIX + 'SEND_RECOVERY_EMAIL';

export const login = createAction(LOGIN);
export const setPassword = createAction(SET_PASSWORD);
export const sendRecoveryEmail = createAction(SEND_RECOVERY_EMAIL);