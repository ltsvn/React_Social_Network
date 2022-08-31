import React from "react";
import s from "./Post.module.css";


type MessageType = {
    message: string
    likesCount: number
}

const Post = (props:MessageType) => {
    return (
        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI8AeBnWElMUXOK6cBZbyvgqj0hdHdSs9S-g&usqp=CAU'/>
            {props.message};
            <div>
                <span>like</span>{props.likesCount}
            </div>
        </div>
    )
}

export default Post;