import {createAction} from './actionHelpers';
import * as types from './actionTypes';

export const login = createAction(types.LOGIN);
export const sendRecoveryEmail = createAction(types.SEND_RECOVERY_EMAIL);
export const passwordConfirm = createAction(types.PASSWORD_CONFIRM);
