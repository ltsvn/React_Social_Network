import React from 'react';
import s from './FriendsScroll.module.css';
import List from "./List/List";
import {UserType} from "../../Redux/Users-Reducer";
import {FriendsScrollPropsType} from "./FriendsScrollContainer";

export type FriendsScrollTypeFunc = FriendsScrollPropsType & {
    users: UserType[]
}
const FriendsScroll: React.FC<FriendsScrollTypeFunc> = ({usersPage}) => {
    return (
        <div className={s.friend_scroll_wrapper}>
            <div className={s.title}>Friends</div>
            <input className={s.searchInput} type='search' placeholder='Search Contacts...'/>
            <div className={s.list}>
                {
                    usersPage.map(userItem =><List key={userItem.id}
                                             userItem={userItem} />)
                }
            </div>
        </div>
    );
};

export default FriendsScroll;
