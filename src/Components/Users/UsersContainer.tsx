import React from "react";
import {connect} from "react-redux";
import {
    follow,
    getUsers,
    setCurrentPage, setTotalUsersCount,
    setUsers,
    toggleFollowingProgress, toggleIsFetching,
    unFollow,
    UserType
} from "../../Redux/Users-Reducer";
import {initialStateType} from "../../Redux/Users-Reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Users} from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";


class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} onPageChanged={this.onPageChanged}
                   users={this.props.usersPage.users} follow={this.props.follow}
                   unFollow={this.props.unFollow} usersPage={this.props.usersPage}
                   setCurrentPage={this.props.setCurrentPage}
                   setTotalUsersCount={this.props.setTotalUsersCount} setUsers={this.props.setUsers}
                   isFetching={this.props.isFetching} toggleIsFetching={this.props.toggleIsFetching}
             followingInProgress={this.props.followingInProgress} toggleFollowingProgress={this.props.toggleFollowingProgress} getUsers={this.props.getUsers}/>
        </>
    }
}

type mapStateToPropsType = {
    usersPage: initialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize:number)=>void

}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose<React.ComponentType>(
    // withAuthRedirect,
    connect(mapStateToProps, {
    follow, unFollow, setCurrentPage, toggleFollowingProgress, getUsers,toggleIsFetching, setUsers, setTotalUsersCount }))(UsersContainer)
