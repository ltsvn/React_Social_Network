import {initialStateType,} from "../Redux/Users-Reducer";

export const updateObjectInArray = (items: initialStateType, itemId: number, newObjProps: boolean) => {
    return items.users.map(user => {
        if (user.id === itemId) {
            return {...user, followed:newObjProps}
        }
        return user;
    })
    }