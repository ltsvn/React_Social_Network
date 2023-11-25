import React from "react";
import {UsersPropsType} from "./UsersContainer";
import {UserType} from "../../Redux/Users-Reducer";
import Paginator from "../common/Paginator/Paginator";
import {User} from "./User/User";
import s from './Users.module.css'

export type UsersTypeFunc = UsersPropsType & {
    onPageChanged: (pageNumber: number) => void
    users: UserType[]
}

export const Users: React.FC<UsersTypeFunc> = ({totalUsersCount, pageSize,
                                                   currentPage, onPageChanged, usersPage, followingInProgress, follow, unFollow
                                               }) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize}/>
        <div className={s.users}>
            {
         usersPage.map(user =><User key={user.id}
                                       user={user}
                                       followingInProgress={followingInProgress}
                                       unFollow={unFollow}
                                       follow={follow} />)
        }
        </div>
    </div>
}
