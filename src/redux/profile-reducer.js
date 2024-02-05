import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

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
        case DELETE_POST:
            return {
                ...state,
                myPosts: state.myPosts.filter(p => p.id !== action.id),
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos},
            }
        default:
            return state;
    }
}

export const APActionCreator = (text) => ({
    type: ADD_POST,
    text
});
export const deletePost = (id) => ({
    type: DELETE_POST,
    id
});
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
});

export const setStatus = (status) => ({
    type: SET_STATUS,
    status
});
export const savePhotoSuccess = (photos) => ({
    type: SAVE_PHOTO_SUCCESS,
    photos
});


export const getUserProfileData = (userId) => (dispatch) => {
    dispatch(setUserProfile(null))
    profileAPI.getUserProfile(userId).then((data) => {
        dispatch(setUserProfile(data));
    });
}


// dispatch(setUserProfile({
//     aboutMe: 'Учу реакт',
//     contacts: {
//         facebook: 'facebook.com/vitya',
//         github: 'github.com/vitya8989',
//         instagram: null,
//         mainLink: null,
//         twitter: null,
//         vk: 'vk.com',
//         website: 'socialPet',
//         youtube: null,
//     },
//     fullName: 'Виктор К.',
//     lookingForAJob: false,
//     lookingForAJobDescription: null,
//     photos: {
//         large: null,
//         small: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'
//     },
//     userId: null
// }));


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

export const savePhoto = (file) => (dispatch) => {
    profileAPI.savePhoto(file).then((data) => {
        if (data.resultCode === 0) {
            dispatch(savePhotoSuccess(data.data.photos));
        } else {
            alert('ошибка');
        }
    });
}
export const saveProfile = (profile) => (dispatch, getState) => {
    profileAPI.saveProfile(profile).then((data) => {
        if (data.resultCode === 0) {
            const userId = getState().auth.id;
            dispatch(getUserProfileData(userId));
        } else {
            let message = data.messages.length ? data.messages[0] : 'Что-то пошло не так';
            //общая ошибка
            dispatch(stopSubmit('edit-profile', {_error: message}));
            //для конкретного поля
            // dispatch(stopSubmit('edit-profile', {'aboutMe': message}));
            // dispatch(stopSubmit('edit-profile', {'contacts':{'facebook': message}}));
        }
    });
}


export default profileReducer;