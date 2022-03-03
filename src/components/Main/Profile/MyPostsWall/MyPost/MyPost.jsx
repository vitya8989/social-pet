import style from './MyPost.module.css';

const MyPost = (props) => {
    return (
        <div className={style.wall_post}>
            <div className={style.wall_post_left}>
                <div className={style.wall_post_author}>
                    <img src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" alt=""/>
                </div>
                <div className={style.like_btn_wr}>
                    <button className={style.like_btn}>
                        <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/344/external-like-project-management-and-development-flatart-icons-outline-flatarticons.png" alt=""/>{props.count_likes}
                    </button>
                </div>
            </div>
            <div>
                {props.text} <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus assumenda consectetur culpa cupiditate dignissimos dolore dolorum, ea eligendi et fugiat maxime molestias nam quia rem soluta vel? Laborum, nobis!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, atque consectetur deserunt explicabo fugiat illum in ipsam, minima nam nihil odit quasi totam ut. Aliquid atque necessitatibus obcaecati reiciendis repellendus.
            </div>

        </div>
    );
}

export default MyPost;