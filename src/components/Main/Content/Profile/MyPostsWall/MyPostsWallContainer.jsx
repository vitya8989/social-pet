import MyPostsWall from "./MyPostsWall";
import React from 'react';
import {APActionCreator} from "../../../../../redux/profile-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        profile: state.profile,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch(APActionCreator(text));
        },
    }
}

const MyPostsWallContainer = connect(mapStateToProps, mapDispatchToProps)(MyPostsWall);

export default MyPostsWallContainer;