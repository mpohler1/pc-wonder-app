import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'open-iconic/font/css/open-iconic-bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import App from './App';
import {Provider} from "react-redux";
import store from "./store/store";
import {BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";

ReactDOM.render(
    <Provider store={store}>
        <ToastContainer/>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
