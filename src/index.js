import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'open-iconic/font/css/open-iconic-bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import App from './App';
import {Provider} from "react-redux";
import store from "./store/store";
import {HashRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import ScrollToTop from "./components/utility/ScrollToTop";
import ScrollMemory from 'react-router-scroll-memory';

ReactDOM.render(
    <HashRouter basename={process.env.PUBLIC_URL} hashType="slash">
        <Provider store={store}>
            <ToastContainer/>
            <ScrollMemory/>
            <ScrollToTop>
                <App />
            </ScrollToTop>
        </Provider>
    </HashRouter>,
    document.getElementById('root')
);
