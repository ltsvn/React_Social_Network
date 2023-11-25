import React from "react";
import styles from './../Users.module.css';
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
                       <span>
                            <div>
                                <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                                     className={styles.usersPhoto} alt='photo'/>
                                </NavLink>
                            </div>
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
                       </span>
            <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
            <span>
                            <div>{'user.location.city'}</div>
                            <div>{'user.location.country'}</div>
                        </span>
        </div>
    </div>
}
