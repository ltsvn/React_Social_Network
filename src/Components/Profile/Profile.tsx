import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPost/MyPosts";


const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
            </div>
            <div>
                ava + discription
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile