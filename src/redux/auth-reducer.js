import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isLogin: false,
    captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case TOOGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case GET_CAPTCHA_URL_SUCCESS:
            return {...state,
                ...action.payload}
        default:
            return state;
    }
}

export const setUserData = (id, email, login, isLogin) => ({
    type: SET_USER_DATA,
    payload: {
        id,
        email,
        login,
        isLogin
    }
});

export const setIsFetching = (isFetching) => ({
    type: TOOGLE_IS_FETCHING,
    isFetching: isFetching,
});

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl},
});

export const authCheck = () => async (dispatch) => {
    let response = await authAPI.auth();

    if (response.resultCode === 0) {
        let {id, email, login} = response.data;
        dispatch(setUserData(id, email, login, true));
        dispatch(setIsFetching(false));
    }

}

export const authLogin = (formData) => async (dispatch) => {
    let response = await authAPI.login(formData);

    if (response.resultCode === 0) {
        dispatch(authCheck());
    } else if (response.resultCode === 10) {
        dispatch(getCaptchaUrl());
    } else {
        dispatch(setIsFetching(false));
        let message = response.messages.length ? response.messages[0] : 'Что-то пошло не так';
        dispatch(stopSubmit('login', {_error: message}));
    }

}

export const authLogout = () => async (dispatch) => {
    let response = await authAPI.logout();
    if (response.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
    dispatch(setIsFetching(false));
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.url;

    dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export default authReducer;