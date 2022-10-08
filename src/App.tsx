import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import state, {ActionsTypes, RootStateType, StoreType} from "./Redux/Store";
import store from "./Redux/Store";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";


type AppType = {
    // state: RootStateType
     //store: StoreType
    // dispatch: (action: ActionsTypes) => void
}

const App: React.FC<AppType> = (props) => {
    const state = store.getState();
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/profile' component={Profile}/>*/}

                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/profile' render={() => <Profile />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;