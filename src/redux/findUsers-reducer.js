import {followAPI, usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const TOOGLE_IS_FOLLOWING_PROGRESS = 'TOOGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    findUsersList: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const findUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                findUsersList: state.findUsersList.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: true,
                        }
                    }
                    return user;
                }),
            }

        case UNFOLLOW:
            return {
                ...state, findUsersList: state.findUsersList.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: false,
                        }
                    }
                    return user;
                }),
            }
        case SET_USERS:
            return {
                ...state, findUsersList: [...action.users],
            }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case TOOGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOOGLE_IS_FOLLOWING_PROGRESS:
            return {...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId),
            }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({
    type: FOLLOW,
    userId,
});

export const unfollowSuccess = (userId) => ({
    type: UNFOLLOW,
    userId,
});

export const setUsers = (users) => ({
    type: SET_USERS,
    users,
});

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
});

export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount,
});

export const setIsFetching = (isFetching) => ({
    type: TOOGLE_IS_FETCHING,
    isFetching: isFetching,
});

export const setFollowingInProgress = (isFetching, userId) => ({
    type: TOOGLE_IS_FOLLOWING_PROGRESS,
    userId,
    isFetching,
});

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then((data) => {
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
            dispatch(setIsFetching(false));
        });
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(setFollowingInProgress(true, userId));
        followAPI.unfollow(userId).then((data) => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId));
            }
            dispatch(setFollowingInProgress(false, userId));
        });
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(setFollowingInProgress(true, userId));
        followAPI.follow(userId).then((data) => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(setFollowingInProgress(false, userId));
        });
    }
}

export default findUsersReducer;