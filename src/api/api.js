import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY' : 'c78b4c9c-4c79-4bb8-bc5f-bc614f063437',
    }
});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    }
}

export const followAPI = {
    follow (userId) {
        return instance.post(`follow/${userId}`, {}).then(response => response.data);
    },
    unfollow (userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data);
    }
}

export const authAPI = {
    auth () {
        return instance.get(`auth/me`).then(response => response.data);
    },
    login (formData) {
        return instance.post('auth/login', formData).then(response => response.data);
    },
    logout () {
        return instance.delete('auth/login').then(response => response.data);
    }
}

export const profileAPI = {
    getUserProfile (userId) {
        return instance.get(`profile/${userId}`).then(response => response.data);
    },
    getStatus (userId) {
        return instance.get(`profile/status/${userId}`).then(response => response.data);
    },
    updateStatus (status) {
        return instance.put(`profile/status`, {
            status: status,
        }).then(response => response.data);
    }
}