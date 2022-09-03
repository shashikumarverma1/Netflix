import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store/store';

import Home from './pages/Home/Home';

import './index.scss';
// const Globalinfo=createContext()
ReactDOM.render(
    <div>
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    </div>,
    document.getElementById('root')
);
