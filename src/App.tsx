import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import state, { RootStateType, StoreType} from "./State/StateTS";
import store from "./State/StateTS";



type AppType = {
    state:RootStateType
    updateNewPostText: (newText: string) => void
    addPostCallBack: (postText: string) => void
    store: StoreType
}

const App:React.FC<AppType> = (props) => {
    const state = props.store.getState();

    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                {/*<Route path='/dialogs' component={Dialogs}/>*/}
                {/*<Route path='/profile' component={Profile}/>*/}

                <Route path='/dialogs' render={() => <Dialogs state={state.dialogsPage}/>}/>
                <Route path='/profile' render={() => <Profile profilePage={state.profilePage}
                                                              updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                                                              addPostCallBack={props.store.addPost.bind(props.store)}/>}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;