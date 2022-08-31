import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import state, {RootStateType} from "./State/StateTS";

type AppType = {
    state:RootStateType
}

const App:React.FC<AppType> = ({state}) => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                {/*<Route path='/dialogs' component={Dialogs}/>*/}
                {/*<Route path='/profile' component={Profile}/>*/}

                <Route path='/dialogs' render={() => <Dialogs state={state.dialogsPage}/>}/>
                <Route path='/profile' render={() => <Profile posts={state.profilePage.posts}/>}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;