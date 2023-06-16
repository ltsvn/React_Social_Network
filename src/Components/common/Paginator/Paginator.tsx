import React from "react";
import styles from "../../common/Paginator/Paginator.module.css";
import {UsersPropsType} from "../../Users/UsersContainer";
import {UserType} from "../../../Redux/Users-Reducer";

export type UsersTypeFunc = UsersPropsType & {
    onPageChanged: (pageNumber: number) => void
    users:UserType[]
}
type PagPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
}

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10}: PagPropsType) => {

    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
            {pages.map(page => {
                return <span className={currentPage === page ? styles.selectedPage : ''}
                             onClick={(e) => {
                                 onPageChanged(page)
                             }}>{page}</span>
            })}
        </div>
}
export default Paginator;