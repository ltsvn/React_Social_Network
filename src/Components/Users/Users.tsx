import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UsersPropsType} from "./UsersContainer";
import {UserType} from "../../Redux/Users-Reducer";
import {NavLink} from "react-router-dom";


export type UsersTypeFunc = UsersPropsType & {
    onPageChanged: (pageNumber: number) => void
    users:UserType[]
}

export const Users = (props: UsersTypeFunc) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(page => {
                return <span className={props.currentPage === page ? styles.selectedPage : ''}
                             onClick={(e) => {
                                 props.onPageChanged(page)
                             }}>{page}</span>
            })}
        </div>
        {props.usersPage.map(user => <div key={user.id} className={styles.container}>
    <span>
        <div>
            <NavLink to={'/profile/' + user.id}>
            <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                 className={styles.usersPhoto}/>
            </NavLink>
        </div>
        <div>
        {user.followed
            ? <button disabled={props.followingInProgress.some((id: number) => id === user.id)}
                      onClick={() => {props.unFollow(user.id)}}>Unfollow</button>
            : <button disabled={props.followingInProgress.some((id: number) => id === user.id)}
                      onClick={() => {props.follow( user.id)}}>Follow</button>}
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
        )}
    </div>
}
