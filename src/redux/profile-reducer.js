import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    profile: null,
    status: '',
    myPosts: [
        {
            id: 1,
            text: 'Привет, это мой первый пост',
            countLikes: 3
        },
        {
            id: 2,
            text: 'Привет, это мой второй пост',
            countLikes: 4
        },
        {
            id: 3,
            text: 'Привет, это мой третий пост',
            countLikes: 8
        },
    ],
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.myPosts[state.myPosts.length - 1].id + 1,
                text: action.text,
                countLikes: 0,
            }
            return {
                ...state,
                myPosts: [...state.myPosts, newPost],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            };
        default:
            return state;
    }
}

export const APActionCreator = (text) => ({
    type: ADD_POST,
    text
});

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
});

export const setStatus = (status) => ({
    type: SET_STATUS,
    status
});

export const getUserProfileData = (userId) => (dispatch) => {
    if (userId) {
        dispatch(setUserProfile(null))
        profileAPI.getUserProfile(userId).then((data) => {
            dispatch(setUserProfile(data));
        });
    } else {
        dispatch(setUserProfile({
            aboutMe: 'Учу реакт',
            contacts: {
                facebook: 'facebook.com/vitya',
                github: 'github.com/vitya8989',
                instagram: null,
                mainLink: null,
                twitter: null,
                vk: 'vk.com',
                website: 'socialPet',
                youtube: null,
            },
            fullName: 'Виктор К.',
            lookingForAJob: false,
            lookingForAJobDescription: null,
            photos: {
                large: null,
                small: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'
            },
            userId: null
        }));
    }
}

export const getStatus = (userId) => (dispatch) => {
    if (userId) {
        dispatch(setStatus(''))
        profileAPI.getStatus(userId).then((data) => {
            dispatch(setStatus(data));
        });
    } else {
        dispatch(setStatus('Yo, это мой статус'));
    }
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then((data) => {
        if (data.resultCode === 0) {
            dispatch(setStatus(status));
        } else {
            alert('ошибка');
        }
    });
}

export default profileReducer;