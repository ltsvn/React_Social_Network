import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC, UserType} from "../../Redux/Users-Reducer";
import {initialStateType} from "../../Redux/Users-Reducer";
import {AppStateType} from "../../Redux/redux-store";

type mapStateToPropsType = {
    usersPage: initialStateType
}
type mapDispatchToPropsType = {
    follow:(userId:number)=>void
    unfollow:(userId:number)=>void
    setUsers:(users: UserType[])=>void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType =>{
    return{
        usersPage: state.users
    }
}

const maoDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType =>{
    return{
        follow: (userId:number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId:number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect (mapStateToProps, maoDispatchToProps)(Users);

export default UsersContainer;