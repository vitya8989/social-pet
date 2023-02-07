import style from './MyPost.module.scss';

const MyPost = (props) => {
    return (
        <div className={style.wall_post}>
            <div className={style.wall_post_left}>
                <div className={style.wall_post_author}>
                    <img src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" alt=""/>
                </div>
                <div>
                    <button className={style.like_btn}>
                        <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/344/external-like-project-management-and-development-flatart-icons-outline-flatarticons.png" alt=""/>{props.count_likes}
                    </button>
                </div>
            </div>
            <div>{props.text}</div>
        </div>
    );
}

export default MyPost;