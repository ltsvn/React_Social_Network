import React from "react";
import {initialStateType, UserType} from "../../Redux/Users-Reducer";
import styles from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";


const Users = (props: UsersPropsType) => {

    if(props.usersPage.users.length === 0){
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://img.icons8.com/plasticine/2x/person-male.png',
                followed: true,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 2,
                photoUrl: 'https://img.icons8.com/plasticine/2x/person-male.png',
                followed: false,
                fullName: 'Nastya',
                status: 'I am a pretty girl',
                location: {city: 'Lvov', country: 'Ukraine'}
            },
            {
                id: 3,
                photoUrl: 'https://img.icons8.com/plasticine/2x/person-male.png',
                followed: true,
                fullName: 'Ola',
                status: 'I am a hr',
                location: {city: 'Luck', country: 'Ukraine'}
            },
        ]
        )
    }

    return <div>
        {
            props.usersPage.users.map(user => <div key={user.id} className={styles.container}>
                <span>
                     <div>
                        <img src={user.photoUrl} className={styles.usersPhoto}/>
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
                    <div>{user.location.city}</div>
                    <div>{user.location.country}</div>
                </span>
            </div>)
        }
    </div>
}

export default Users;