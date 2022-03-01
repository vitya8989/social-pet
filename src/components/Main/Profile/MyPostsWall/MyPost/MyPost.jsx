import style from './MyPost.module.css';

const MyPost = () => {
    return (
        <div className={style.wall_post}>
            <div className={style.wall_post_author}>
                <img src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" alt=""/>
            </div>
            <div>
                Привет, это мой первый пост <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus assumenda consectetur culpa cupiditate dignissimos dolore dolorum, ea eligendi et fugiat maxime molestias nam quia rem soluta vel? Laborum, nobis!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, atque consectetur deserunt explicabo fugiat illum in ipsam, minima nam nihil odit quasi totam ut. Aliquid atque necessitatibus obcaecati reiciendis repellendus.
            </div>
        </div>
    );
}

export default MyPost;