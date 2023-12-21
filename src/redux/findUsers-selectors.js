import {createSelector} from "reselect";

// Простые селекторы

export const getPageSize = (state) => {
    return state.findUsersPage.pageSize;
}
export const getTotalUsersCount = (state) => {
    return state.findUsersPage.totalUsersCount;
}
export const getCurrentPage = (state) => {
    return state.findUsersPage.currentPage;
}
export const getIsFetching = (state) => {
    return state.findUsersPage.isFetching;
}
export const getFollowingInProgress = (state) => {
    return state.findUsersPage.followingInProgress;
}

// Reselect selectors

const getFindUsersList = (state) => {
    return state.findUsersPage.findUsersList;
}

export const getFindUsersListSuper = createSelector(getFindUsersList, (users) => {
    return users.filter(u => true);
});

