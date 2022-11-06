import axios from "axios";


const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'


 const instance = axios.create({
    withCredentials: true,
     baseURL: 'https://social-network.samuraijs.com/api/1.0/',
     headers:{'API-KEY': '6174a406-60ce-40de-acee-7360df3628e1'}
})



export const usersAPI = {
    getUsers(currentPage: number, pageSize: number){
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
        return response.data
    })
}}

export const getUsers2 = (id: number) => {
    return instance.get(`follow/${user.id}`).then(response => {
        return response.data
    })
}

