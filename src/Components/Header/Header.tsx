import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {AuthPropsType} from "./HeaderContainer";

const Header = (props: AuthPropsType) => {
    return (
        <header className={s.header}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTj-MM_UyJqsvN2GeGKQKLEHNaL-cfeoLa-Q&usqp=CAU'/>

            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header