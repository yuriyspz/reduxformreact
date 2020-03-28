import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from "redux";
import {reducer as reduxFormReducer} from 'redux-form'
import {Provider} from 'react-redux';

const reducer = combineReducers({
    form: reduxFormReducer, // mounted under "form"
});

const store = createStore(reducer);
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
