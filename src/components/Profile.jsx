import style from './Profile.module.css';

const Profile = () => {
    return (
        <div className={style.content}>
            <div className={style.img}>
                <img src="https://user-images.githubusercontent.com/88069082/149673405-b47f71c1-0777-4038-9247-5b0c9d166f22.jpg" alt=""/>
            </div>
            <div className={style.info}>
                <div className={style.info_img}>
                    <img src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" alt=""/>
                </div>
                <div>
                    <div className={style.info_name}>
                        Виктор К.
                    </div>
                    <div>
                        Дата рождения: 9 мая 1989 <br />
                        Город: Адлер <br />
                        Образование: Среднее-специальное <br />
                        Веб-сайт: Social-pet
                    </div>
                </div>
            </div>
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
                    <div className={style.wall_post}>
                        <div className={style.wall_post_author}>
                            <img src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" alt=""/>
                        </div>
                        <div>
                            Привет, это мой второй пост <br />
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus assumenda consectetur culpa cupiditate dignissimos dolore dolorum, ea eligendi et fugiat maxime molestias nam quia rem soluta vel? Laborum, nobis!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, atque consectetur deserunt explicabo fugiat illum in ipsam, minima nam nihil odit quasi totam ut. Aliquid atque necessitatibus obcaecati reiciendis repellendus.
                        </div>
                    </div>
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
                </div>
            </div>
        </div>
    );
}

export default Profile;