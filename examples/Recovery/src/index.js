import {Recovery, Input} from 'experium-modules';
import { Provider } from 'react-redux';
import React from 'react';
import {Field} from 'redux-form';
import { render } from 'react-dom';
import configureStore from './store';

const store = configureStore();

class AppContainer extends React.Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <Recovery url="/some" initialValues={{'url-with-token':'http://some.ru/'}}>
                    <label>
                        email
                        <Field name='email'
                               component={Input}
                               type='email'
                               placeholder='Введите email' />
                    </label>
                </Recovery>
            </Provider>
        );
    }
}

const MOUNT_NODE = document.getElementById('root');
render((
    <AppContainer store={store} />
), MOUNT_NODE);