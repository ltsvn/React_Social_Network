import React from 'react';
import {UserType} from "../../../Redux/FriendsScroll-Reducer";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/user.png";
import styles from "./List.module.css";


export type ListPropsType = {
    userItem: UserType,
}
const List: React.FC<ListPropsType> = ({userItem}) => {
    return <div>
            <div key={userItem.id} className={styles.userItem}>
                    <div>
                        <NavLink to={'/profile/' + userItem.id}>
                        <img src={userItem.photos.small !== null ? userItem.photos.small : userPhoto}
                             className={styles.usersPhoto} alt='userPhoto'/>
                        </NavLink>
                    </div>
                    <div className={styles.name}>{userItem.name}</div>

            </div>
        </div>
};

export default List;
