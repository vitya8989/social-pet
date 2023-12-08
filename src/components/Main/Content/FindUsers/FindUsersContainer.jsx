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
        findUsersList: state.findUsersPage.findUsersList,
        pageSize: state.findUsersPage.pageSize,
        totalUsersCount: state.findUsersPage.totalUsersCount,
        currentPage: state.findUsersPage.currentPage,
        isFetching: state.findUsersPage.isFetching,
        myId: state.auth.id,
        followingInProgress: state.findUsersPage.followingInProgress,
    }
}

export default compose(
    connect(mapStateToProps, {setCurrentPage, getUsers, follow, unfollow}),
    withAuthRedirect
)(FindUsersContainer)