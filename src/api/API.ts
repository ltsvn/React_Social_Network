import axios from "axios";
import {setAuthUserData} from "../Redux/auth-reducer";


const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '6174a406-60ce-40de-acee-7360df3628e1'}
})


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    follow(userId:number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    setAuthUserData(){
        return instance.get(`auth/me`)
    },
    getProfile(userId:string){
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile( userId);
    }
}

export const profileAPI = {
    getProfile(userId:string){
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId);
    },
    getStatus(userId:string){
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/status/` + userId)
    },
    updateStatus(status:string){
        return instance.put(`https://social-network.samuraijs.com/api/1.0/profile/status`, {status: status})
    },
}
export const authAPI = {
    me() {return instance.get(`auth/me`)},
}


// export const getUsers2 = (id: number) => {
//     return instance.get(`follow/${user.id}`).then(response => {
//         return response.data
//     })
// }

