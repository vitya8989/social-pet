import style from './MyPostsWall.module.scss';
import MyPost from "./MyPost/MyPost";

const MyPostsWall = (props) => {
    let myPostsElements = props.profile.myPosts.map( myPost => <MyPost text={myPost.text} count_likes={myPost.countLikes} key={myPost.id} id={myPost.id}/> )

    const addPost = (e) => {
        e.preventDefault();
        props.addPost();
    };

    const onPostChange = (e) => {
        let updateText = e.target.value;
        props.onPostChange(updateText);
    }

    return (
        <div className={style.wall}>
            <div className={style.wall_title}>Моя стена</div>
            <div className={style.wall_form_wr}>
                <form action="" name="newPost">
                    <textarea className={style.wall_textarea} value={props.profile.newPostText} onChange={onPostChange}/>
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