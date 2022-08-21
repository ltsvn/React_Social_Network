import React from "react";
import s from "./Navbar.module.css"

// let s = {
//     'nav': 'Navbar_nav__0DO62',
//     'item': 'Navbar_item__-lzq'
// }

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>Profile</div>
            <div className={s.item}>Messages</div>
            <div className={s.item}>News</div>
            <div className={s.item}>Music</div>
            <div className={s.item}>Settings</div>
        </nav>
    )
}

export default Navbar;