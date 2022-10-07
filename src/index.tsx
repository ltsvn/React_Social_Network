import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./Redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import StoreContext from './StoreContext';
import {Provider} from "react-redux";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root'));
}

rerenderEntireTree();

store.subscribe(() => {
    const state = store.getState();
    rerenderEntireTree(state)
});
