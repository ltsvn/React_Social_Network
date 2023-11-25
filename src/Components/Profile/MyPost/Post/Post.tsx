import React from "react";
import s from "./Post.module.css";
import avatar from "../../../../assets/images/avatar.png";
import {IoHeartOutline} from "react-icons/io5";


type MessageType = {
    message: string
    likesCount: number
}

const Post = (props:MessageType) => {
    return (
        <div className={s.item}>
            <div className={s.postItem}>
                <img src={avatar} alt='profileImg'/>
                <div>
                    Nastya Lutsiv
                </div>
            </div>

            <div className={s.postMessage}>
                {props.message};
            </div>
            <div className={s.likes}>
                <IoHeartOutline />{props.likesCount}
            </div>
        </div>
    )
}

export default Post;