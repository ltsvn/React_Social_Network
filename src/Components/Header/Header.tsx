import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {AuthPropsType} from "./HeaderContainer";
import avatar from '../../assets/images/avatar.png'
import {Button, message, Upload, UploadProps} from "antd";
import {FiUpload} from "react-icons/fi";
import {AiOutlineCamera} from "react-icons/ai";

const props: UploadProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};
const Header = (props: AuthPropsType) => {
    return (
        <header className={s.header}>
            <div className={s.headerItemWrap}>
                <div className={s.headerContainer}>
                    <div className={s.imgStyle}>
                        <img src={avatar} alt='profileImg'/>
                    </div>
                    <div className={s.upload}>
                        <Upload {...props}>
                            <Button icon={<AiOutlineCamera />} className={s.button} >Edit Photo</Button>
                        </Upload>

                    </div>
                </div>
            </div>

            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header