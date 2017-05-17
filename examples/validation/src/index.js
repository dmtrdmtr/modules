import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';
import Form from './Form';
import '../index.css';

const store = configureStore();

const App = ({ store }) => (
    <Provider store={store}>
        <Form />
    </Provider>
);

ReactDOM.render(<App store={store} />, document.getElementById('root'));
