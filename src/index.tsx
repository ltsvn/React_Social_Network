import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {StoreType} from "./State/StateTS";



let rerenderEntireTree = (state) => {
    ReactDOM.render(

            <App state={state}
                 addPostCallBack={store.addPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}
            />,
        document.getElementById('root'));
}

rerenderEntireTree(store.getState);

store.subscribe(rerenderEntireTree);

ServiceWorker.unregister();