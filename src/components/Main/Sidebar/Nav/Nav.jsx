import style from './Nav.module.scss';
import { NavLink } from 'react-router-dom';

const setActive = ({ isActive }) => isActive ? style.active : "";

const Nav = () => {

    return (
        <nav>
            <div>
                <div className={style.link}><NavLink to="/" className={setActive}>Моя страница</NavLink></div>
                <div className={style.link}><NavLink to="/dialogs" className={setActive}>Сообщения</NavLink></div>
                <div className={style.link}><NavLink to="/find-users" className={setActive}>Найти друзей</NavLink></div>
                <div className={style.link}><NavLink to="/news" className={setActive}>Новости</NavLink></div>
                <div className={style.link}><NavLink to="/music" className={setActive}>Музыка</NavLink></div>
            </div>
            <div className={style.links_bottom}>
                <div className={style.link}><NavLink to="/settings" className={setActive}>Настройки</NavLink></div>
            </div>
        </nav>
    );
}

export default Nav;