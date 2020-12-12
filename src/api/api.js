import * as axios from 'axios'

const instAxios = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "652ff7af-5c6a-483c-bc06-295961b6a41e"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instAxios.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(userId) {
        return instAxios.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instAxios.delete(`follow/${userId}`)
    }
}
export const profileAPI = {
    getProfile(userId) {
        return instAxios.get(`profile/${userId}`)
    },
    getUserStatus(userId) {
        return instAxios.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instAxios.put(`profile/status`, {status})
    },
    updateAvatar(file) {
        const formData = new FormData()
        formData.append('image', file)

        return instAxios.put(`profile/photo`, formData)
    },
    updateProfile(profile) {
        return instAxios.put(`profile`, profile)
    }
}
export const authAPI = {
    me() {
        return instAxios.get(`auth/me`)
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instAxios.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instAxios.delete(`auth/login`)
    }
}
export const securityAPI = {
    getCaptchaURL() {
        return instAxios.get(`security/get-captcha-url`)
    }
}