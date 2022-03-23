import style from './MyPostsWall.module.scss';
import MyPost from "./MyPost/MyPost";
import React from 'react';

const MyPostsWall = (props) => {

    let myPostsElements = props.myPosts.map( myPost => <MyPost text={myPost.text} count_likes={myPost.countLikes} /> )

    let newPost = React.createRef();

    const addPost = () => {
        let textContent = newPost.current.value;
        alert(textContent);
    };

    return (
        <div className={style.wall}>
            <div className={style.wall_title}>Моя стена</div>
            <div className={style.wall_form_wr}>
                <form action="">
                    <textarea ref={ newPost } className={style.wall_textarea}></textarea>
                    <div className={style.wall_btn_wr}>
                        <button className={style.wall_btn} onClick={ addPost }>Опубликовать</button>
                    </div>
                </form>
            </div>
            <div className={style.wall_posts}>
                { myPostsElements }
            </div>
        </div>
    );
}

export default MyPostsWall;