import React from "react";
import styles from "./Paginator.module.css";
import { UsersPropsType } from "../../Users/UsersContainer";
import { UserType } from "../../../Redux/Users-Reducer";

export type UsersTypeFunc = UsersPropsType & {
    onPageChanged: (pageNumber: number) => void;
    users: UserType[];
};
type PagPropsType = {
    totalUsersCount: number;
    pageSize: number;
    currentPage: number;
    onPageChanged: (pageNumber: number) => void;
    portionSize?: number;
};

const Paginator = ({
                       totalUsersCount,
                       pageSize,
                       currentPage,
                       onPageChanged,
                       portionSize = 10,
                   }: PagPropsType) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    const portionCount = Math.ceil(pagesCount / portionSize);
    const portionNumber = Math.ceil(currentPage / portionSize);

    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    const pages = [];
    for (let i = leftPortionPageNumber; i <= rightPortionPageNumber; i++) {
        if (i > pagesCount) {
            break;
        }
        pages.push(i);
    }

    return (
        <div className={styles.paginator}>
            {portionNumber > 1 && (
                <button
                    className={styles.paginationButton}
                    onClick={() => onPageChanged(leftPortionPageNumber - 1)}
                >
                    &laquo;
                </button>
            )}
            <div className={styles.paginationDots}>
                {pages.map((page) => {
                    return (
                        <button
                            key={page}
                            className={
                                currentPage === page
                                    ? styles.selectedPage
                                    : styles.paginationButton
                            }
                            onClick={() => {
                                onPageChanged(page);
                            }}
                        >
                            {page}
                        </button>
                    );
                })}
            </div>
            {portionCount > portionNumber && (
                <button
                    className={styles.paginationButton}
                    onClick={() => onPageChanged(rightPortionPageNumber + 1)}
                >
                    &raquo;
                </button>
            )}
        </div>
    );
};
export default Paginator;
