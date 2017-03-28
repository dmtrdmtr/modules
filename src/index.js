import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import createStore from './store/createStore';
import SetPassword from './components/SetPassword';

const store = createStore();

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <SetPassword url="/some" />
            </Provider>
        );
    }
}

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
