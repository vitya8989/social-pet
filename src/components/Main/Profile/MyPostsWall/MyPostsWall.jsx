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
               <MyPost text='Привет, это мой первый пост' count_likes="3" />
               <MyPost text='Привет, это мой второй пост' count_likes="4" />
               <MyPost text='Привет, это мой третий пост' count_likes="8" />
            </div>
        </div>
    );
}

export default MyPostsWall;