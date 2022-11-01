import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unFollow,
    UserType
} from "../../Redux/Users-Reducer";
import {initialStateType} from "../../Redux/Users-Reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Users, UsersTypeFunc} from "./Users";
import axios from "axios";
import preloader from '../../assets/images/preloader.gif';
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} onPageChanged={this.onPageChanged}
                   users={this.props.usersPage.users} follow={this.props.follow}
                   unfollow={this.props.unfollow} usersPage={this.props.usersPage}
                   setCurrentPage={this.props.setCurrentPage}
                   setTotalUsersCount={this.props.setTotalUsersCount} setUsers={this.props.setUsers}
                   isFetching={this.props.isFetching} toggleIsFetching={this.props.toggleIsFetching}
            />
        </>
    }
}

type mapStateToPropsType = {
    usersPage: initialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void

}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType & UsersTypeFunc

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

    }
}

// const maoDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users: UserType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }


export default connect(mapStateToProps, {
    follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersContainer);