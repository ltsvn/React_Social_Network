import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileInfo/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {setAuthUserData} from "./Redux/auth-reducer";
import {getUserProfile} from "./Redux/Profile-Reducer";
import Login from "./Login/Login";


type AppType = {
    // state: RootStateType
     //store: StoreType
    // dispatch: (action: ActionsTypes) => void
}

const App: React.FC<AppType> = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer setAuthUserData={setAuthUserData}/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                    <Route path='/users' render={() => <UsersContainer />}/>
                    <Route path='/login' render={() => <Login />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;