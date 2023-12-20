import React from "react";
import s from './Header.module.css'
import avatar from '../../assets/images/avatar.png'
import {Button, Upload} from "antd";
import {AiOutlineCamera} from "react-icons/ai";

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.headerItemWrap}>
                <div className={s.headerContainer}>
                    <div className={s.imgStyle}>
                        <img src={avatar} alt='profileImg'/>
                    </div>
                    <div className={s.upload}>
                        <Upload>
                            <Button icon={<AiOutlineCamera />} className={s.button} >Edit Photo</Button>
                        </Upload>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header