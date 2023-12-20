import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css"
import {BiIdCard, BiSolidLogOut, BiSolidUser} from "react-icons/bi";
import {BsMessenger} from "react-icons/bs";
import {AiFillNotification, AiFillPicture} from "react-icons/ai";
import {AuthPropsType} from "./NavbarContainer";

const Navbar = (props: AuthPropsType) => {
    return (
        <nav className={s.nav}>
            <div className={s.title}>Shortcuts</div>
            <div className={s.navItems}>
                <div className={s.item}><BiIdCard /> <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink></div>
                <div className={`${s.item} ${s.active}`}><BsMessenger /> <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink></div>
                <div className={`${s.item} ${s.active}`}><BiSolidUser/><NavLink to='/users' activeClassName={s.active}>Users</NavLink></div>
                <div className={`${s.item} ${s.active}`}><AiFillNotification/> <NavLink to='/news'>News</NavLink></div>
                <div className={`${s.item} ${s.active}`}><AiFillPicture/> <NavLink to='/images'>Images</NavLink></div>
                <div className={`${s.item} ${s.active}`}><BiSolidLogOut/> <NavLink to='/login' onClick={props.logout}>Logout </NavLink></div>
            </div>
        </nav>
    )
}

export default Navbar;