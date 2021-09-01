//Modules 
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
//Components
import App from "./App"
//CSS
import "./assets/styles/Custom.scss";

window.addEventListener('load', () => {
    ReactDOM.render(
        <BrowserRouter>
        <App />
        </BrowserRouter>,
    document.getElementById('root'))
});

