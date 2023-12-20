import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import {setAuthUserData} from "./Redux/auth-reducer";
import Login from "./Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import {AppStateType} from "./Redux/redux-store";
import Preloader from "./Components/common/Preloader/Preloader";
import Footer from "./Components/Footer/Footer";
import FriendsScrollContainer from "./Components/FriendsScroll/FriendsScrollContainer";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import Header from "./Components/Header/Header";



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
                <Switch>
                    <Route exact path='/login' component={Login}/>
                    <div className='app-wrapper'>
                        <Header />
                        <div className='app-container'>
                            <NavbarContainer setAuthUserData={setAuthUserData} />
                            <div className='app-content'>
                                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                                    <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                                    <Route path='/users' render={() => <UsersContainer />}/>
                            </div>
                            <FriendsScrollContainer  />
                        </div>
                        <Footer/>
                    </div>
                </Switch>
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