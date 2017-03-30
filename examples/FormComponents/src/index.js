import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';
import {Components} from './Components';
import configureStore from './store';

const store = configureStore();

class AppContainer extends React.Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <Components />
            </Provider>
        );
    }
}

const MOUNT_NODE = document.getElementById('root');
render((
    <AppContainer store={store} />
), MOUNT_NODE);