import style from './MyPostsWall.module.css';
import MyPost from "./MyPost/MyPost";

const MyPostsWall = () => {
    return (
        <div className={style.wall}>
            <div className={style.wall_title}>Моя стена</div>
            <div className={style.wall_form_wr}>
                <form action="" name="wall_form">
                    <textarea name="post" className={style.wall_textarea}></textarea>
                    <div className={style.wall_btn_wr}>
                        <button className={style.wall_btn}>Отправить</button>
                    </div>
                </form>
            </div>
            <div className={style.wall_posts}>
               <MyPost />
               <MyPost />
               <MyPost />
            </div>
        </div>
    );
}

export default MyPostsWall;