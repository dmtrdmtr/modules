import {Login, Input} from 'experium-modules';
import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';
import {Field} from 'redux-form';
import configureStore from './store';

const store = configureStore();

class LoginForm extends React.Component {
    render() {
        return (
            <Login url="/some">
                <label>
                    email
                    <Field name='email'
                           component={Input}
                           type='email'
                           placeholder='Введите email' />
                </label>
                <label>
                    пароль
                    <Field name='password'
                           component={Input}
                           type='password'
                           placeholder='Введите пароль' />
                </label>
                <button type="submit">login</button>
            </Login>
        );
    }
}

class AppContainer extends React.Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <LoginForm />
            </Provider>
        );
    }
}

const MOUNT_NODE = document.getElementById('root');
render((
    <AppContainer store={store} />
), MOUNT_NODE);