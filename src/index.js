import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

import store from './store/store';
import { Provider } from 'react-redux';

import App from './App';

const target = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, target,
);
