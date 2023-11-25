import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {setAuthUserData} from "./Redux/auth-reducer";
import Login from "./Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import {AppStateType} from "./Redux/redux-store";
import Preloader from "./Components/common/Preloader/Preloader";
import Footer from "./Components/Footer/Footer";
import FriendsScrollContainer from "./Components/FriendsScroll/FriendsScrollContainer";


type AppProps = {
    initializeApp: () => void
    initialized: boolean
}

class App extends React.Component<AppProps> {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer setAuthUserData={setAuthUserData}/>
                    <div className='app-container'>
                        <Navbar />
                        <div className='app-content'>
                            <Route path='/dialogs' render={() => <DialogsContainer />}/>
                            <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                            <Route path='/users' render={() => <UsersContainer />}/>
                            <Route path='/login' render={() => <Login />}/>
                        </div>
                        <FriendsScrollContainer  />
                    </div>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

type mapStateToPropsType = {
    initialized: boolean
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    initialized: state.app.initialized
});

export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App) as React.ComponentType;