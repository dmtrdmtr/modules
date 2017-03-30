import {Login} from 'experium-modules';
import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store';

const store = configureStore();

class AppContainer extends React.Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <Login url="/some" />
            </Provider>
        );
    }
}

const MOUNT_NODE = document.getElementById('root');
render((
    <AppContainer store={store} />
), MOUNT_NODE);