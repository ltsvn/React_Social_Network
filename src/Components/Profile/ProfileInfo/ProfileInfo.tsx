import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {ProfilePropsType} from "../Profile";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import avatar from '../../../assets/images/avatar.png';

const ProfileInfo: React.FC<ProfilePropsType> = ({profile, status, updateStatus}) => {
    if(!profile){
        return <Preloader/>
    }

    return (
        <div className={s.profileInfo}>
            <div className={s.descriptionBlock}>
                <div className={s.imgStyle}>
                    <img src={avatar} alt='profileImg'/>
                </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
            <div>
                <div className={s.infoItem}>Name: {profile.fullName}</div>
                <div className={s.infoItem}>About Me: lucky girl</div>
                <div className={s.infoItem}>Job: Front-End Developer</div>
                <div className={s.infoItem}>Contacts: nastaluciv@gmail.com</div>
                <div className={s.infoItem}>Linkedin: linkedin.com</div>
                <div className={s.infoItem}>Github: github.com</div>
            </div>

        </div>
    )
}

export default ProfileInfo;