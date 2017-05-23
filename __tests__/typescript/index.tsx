import * as React from 'react';
import { Provider, Store } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import axios from 'axios';
import { cond } from 'ramda';
import * as M from '../../index';
import configureStore from './store';

const store = configureStore();

const ACTION = `${M.PREFIX}ACTION`;
const test = M.createAction(ACTION);
test();
test({ payload: { id: 3 }});
test({ payload: { name: 'test' }, attrs: { id: 1 }});
test.error();
test.request();
test.success();
test.reset();

const toErrorAction = M.toError(M.LOGIN);
const toRequestAction = M.toRequest(M.SEND_RECOVERY_EMAIL);
const toSuccessAction = M.toSuccess(M.PASSWORD_CONFIRM);
const toResetAction = M.toReset(M.LOGIN);

M.login();
M.sendRecoveryEmail();
M.passwordConfirm();

const meta = M.createMetaReducer({ get: ACTION });
const fullMeta = M.createMetaReducer({ get: ACTION, post: ACTION, put: ACTION, delete: ACTION });
const metaActions = M.createMetaActionTypes(ACTION);

const mail = M.EMAIL;

M.setActionHandler(M.PASSWORD_CONFIRM, () => axios.post('/password-confirm'));
M.doAction(test());

const emailValidation = cond([M.email, M.required]);
const passwordValidation = cond([M.password, M.required]);

M.validate({ name: [ () => {}, 'error'] })({ name: '' });

M.requestGenerator(test, test());

@reduxForm({ form: 'test' })
class Form extends React.Component<{}, {}> {
    render() {
        return (
            <form>
                <h2>Form components</h2>
                <label>Input</label>
                <Field component={M.Input}
                       name='Input'
                       type='text'
                       placeholder='Your text' />
               <label>MaskInput</label>
               <Field component={M.MaskInput}
                      name='MaskInput'
                      type='text'
                      placeholder='Your masked phone'
                      mask='+7(111)111-11-11' />
               <label>NumberInput</label>
               <Field component={M.NumberInput}
                      name='NumberInput'
                      placeholder='Your number' />
               <label>DateInput</label>
               <Field component={M.DateInput}
                      name='DateInput'
                      placeholder='Your date'
                      initialView='year'
                      finalView='decade'
                      viewFormat='MMM YYYY'
                      dateFormat='MMYYYY' />
               <label>Select</label>
               <Field component={M.Select}
                      name='Select'
                      placeholder='Choose something'
                      valueField='n'
                      textField='value'
                      options={[{ n: 1, value: '1' }, { n: 2, value: '2' }]} />
               <label>Radio</label>
               <Field component={M.Radio}
                      name='Radio'
                      valueField='n'
                      textField='value'
                      options={[{ n: 1, value: '1' }, { n: 2, value: '2' }]} />
               <label>Select</label>
               <Field component={M.Load(M.Select)}
                      name='Select'
                      placeholder='Choose something'
                      valueField='n'
                      textField='value'
                      getLoadUrl={(props: any) => props.loadName}
                      loadName='dict' />
               <label>Radio</label>
               <Field component={M.Load(M.Radio)}
                      name='Radio'
                      valueField='n'
                      textField='value'
                      getLoadUrl={(props: any) => props.loadName}
                      loadName='dict' />
               <label>Textarea</label>
               <Field component={M.Textarea}
                      name='Textarea'
                      placeholder='Your textarea text' />
            </form>
        );
    }
}

class App extends React.Component<{}, {}> {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Form />
                    <M.Login url='/test' />
                    <M.Recovery url='/test' />
                    <M.PasswordConfirm url='/test' />
                </div>
            </Provider>
        );
    }
}
