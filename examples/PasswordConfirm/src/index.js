import {PasswordConfirm, Input} from 'experium-modules';
import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';
import {Field} from 'redux-form'
import configureStore from './store';

const store = configureStore();

class AppContainer extends React.Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <PasswordConfirm url="/some">
                    <label>
                        Пароль
                        <Field name='password'
                               component={Input}
                               type='password'
                               placeholder='Введите пароль' />
                    </label>
                    <label>
                        Подтвердите пароль
                        <Field name='passwordConfirm'
                               component={Input}
                               type='password'
                               placeholder='Подтвердите пароль' />
                    </label>
                    <button type='submit'>Отправить</button>
                </PasswordConfirm>
            </Provider>
        );
    }
}

const MOUNT_NODE = document.getElementById('root');
render((
    <AppContainer store={store} />
), MOUNT_NODE);