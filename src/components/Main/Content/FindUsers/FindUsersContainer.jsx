import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setCurrentPage,
    getUsers
} from "../../../../redux/findUsers-reducer";
import React from "react";
import FindUsers from "./FindUsers";
import Preloader from "../../../common/Preloader/Preloader";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFindUsersList, getFindUsersListSuper, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
} from "../../../../redux/findUsers-selectors";

class FindUsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching && <Preloader />}
                <FindUsers
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    findUsersList={this.props.findUsersList}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    myId={this.props.myId}
                    followingInProgress={this.props.followingInProgress}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />
            </>
    }
}

let mapStateToProps = (state) => {
    return {
        findUsersList: getFindUsersListSuper(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        myId: state.auth.id,
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, {setCurrentPage, getUsers, follow, unfollow}),
    // withAuthRedirect
)(FindUsersContainer)