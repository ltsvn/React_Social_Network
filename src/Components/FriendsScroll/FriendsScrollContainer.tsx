import React from 'react';
import {
    getUsers, setTotalUsersCount, setUsers,
    UserType
} from "../../Redux/FriendsScroll-Reducer";
import {AppStateType} from "../../Redux/redux-store";
import {
    getTotalUsersCount,
    getUsersPage
} from "../../Redux/user-selectors";
import {compose} from "redux";
import {connect} from "react-redux";
import FriendsScroll from "./FriendsScroll";

class FriendsScrollContainer extends React.Component<FriendsScrollPropsType> {

    render() {
        return <>
            <FriendsScroll totalUsersCount={this.props.totalUsersCount}
                           users={this.props.usersPage}
                           usersPage={this.props.usersPage}
                           setTotalUsersCount={this.props.setTotalUsersCount}
                           setUsers={this.props.setUsers}
                           getUsers={this.props.getUsers} />
        </>
    }
}

type mapStateToPropsType = {
    usersPage: UserType[]
    totalUsersCount: number
}
type mapDispatchToPropsType = {
    setUsers: (users: UserType[]) => void
    setTotalUsersCount: (totalCount: number) => void
    getUsers: (currentPage: number, pageSize: number) => void

}

export type FriendsScrollPropsType = mapStateToPropsType & mapDispatchToPropsType
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: getUsersPage(state),
        totalUsersCount: getTotalUsersCount(state),
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUsers,
        setUsers,
        setTotalUsersCount
    }))(FriendsScrollContainer)
