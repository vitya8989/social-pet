import style from './Info.module.scss';

const Info = () => {
    return (
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
    );
}

export default Info;