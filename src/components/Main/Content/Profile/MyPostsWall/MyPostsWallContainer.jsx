import MyPostsWall from "./MyPostsWall";
import React from 'react';
import {APActionCreator, UNPTActionCreator} from "../../../../../redux/profile-reducer";

const MyPostsWallContainer = (props) => {
    const addPost = () => {
        let action = APActionCreator();
        props.store.dispatch(action);
    };

    const onPostChange = (updateText) => {
        let action = UNPTActionCreator(updateText);
        props.store.dispatch(action);
    }

    return (
        <MyPostsWall profile={props.store.getState().profile} addPost={addPost} onPostChange={onPostChange} />
    );
}

export default MyPostsWallContainer;