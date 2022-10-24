import React from "react";
import {initialStateType, UserType} from "../../Redux/Users-Reducer";
import styles from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/images/user.png'


const Users = (props: UsersPropsType) => {
    const getUsers = () =>
    {
        if(props.usersPage.users.length === 0){
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })
        }
    }

    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.usersPage.users.map(user => <div key={user.id} className={styles.container}>
                <span>
                     <div>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.usersPhoto}/>
                     </div>
                    <div>
                        {user.followed
                            ? <button onClick={()=>{props.unfollow(user.id)}}>Unfollow</button>
                            : <button onClick={()=>{props.follow(user.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                     <div>{user.fullName}</div>
                        <div>{user.status}</div>
                </span>
                <span>
                    <div>{'user.location.city'}</div>
                    <div>{'user.location.country'}</div>
                </span>
            </div>)
        }
    </div>
}

export default Users;