import React from "react";
import styles from './User.module.css';
import userPhoto from "./../../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {UserType} from "../../../Redux/Users-Reducer";
import {FaUserMinus, FaUserPlus} from "react-icons/fa";

type UserPropsType = {
    user: UserType,
    followingInProgress: Array<number>,
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}

export const User = ({user, followingInProgress, follow, unFollow}: UserPropsType) => {
    return <div>
        <div key={user.id} className={styles.container}>
                            <div className={styles.photoTitleUser}>
                                <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                                     className={styles.usersPhoto} alt='photo'/>
                                </NavLink>
                                <div className={styles.userTitle}>{user.name}</div>
                            </div>
                           <div>

                           </div>
                        <span>
                            <div>{user.status}</div>
                        </span>
                            <div>
                                {user.followed
                                    ? <button disabled={followingInProgress.some((id: number) => id === user.id)}
                                              onClick={() => {
                                                  unFollow(user.id)
                                              }}>Unfollow <FaUserMinus/></button>
                                    : <button disabled={followingInProgress.some((id: number) => id === user.id)}
                                              onClick={() => {
                                                  follow(user.id)
                                              }}>Follow <FaUserPlus/></button>}
                          </div>

        </div>
    </div>
}
