import state, {subscribe} from './State/StateTS'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, RootStateType, updateNewPostText} from './State/StateTS'
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = ()=> {
    ReactDOM.render(<BrowserRouter>
            <App state={state}
                 addPostCallBack={addPost}
                 updateNewPostText={updateNewPostText}
            />,
        </BrowserRouter>,
        document.getElementById('root'));
}

subscribe(rerenderEntireTree)