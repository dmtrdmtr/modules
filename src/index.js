import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import createStore from './store/createStore';
import LoginForm from './components/Login';

const store = createStore();

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <LoginForm url="/some" />
            </Provider>
        );
    }
}

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
