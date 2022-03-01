import style from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={style.nav}>
            <div>
                <div className={`${style.link} ${style.active}`}><a href="#">Моя страница</a></div>
                <div className={style.link}><a href="#">Сообщения</a></div>
                <div className={style.link}><a href="#">Новости</a></div>
                <div className={style.link}><a href="#">Музыка</a></div>
            </div>
            <div className={style.links_bottom}>
                <div className={style.link}><a href="#">Настройки</a></div>
            </div>
        </nav>
    );
}

export default Nav;