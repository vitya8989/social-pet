import style from './Header.module.scss';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    const logoutHandler = (e) => {
        e.preventDefault();
        props.setIsFetching(true);
        props.authLogout();
    }

    return (
        <header className={style.header}>
            <div className="container">
                <div className={style.content}>
                    <div className={style.logo}>
                        <img src="https://www.pngplay.com/wp-content/uploads/9/HP-Logo-Transparent-Background.png" alt=""/>
                    </div>
                    {props.auth.isLogin ? <a href="#" onClick={logoutHandler} className={style.loginLink}>Выйти</a> : <NavLink to="/login" className={style.loginLink}>Войти</NavLink>}
                </div>
            </div>
        </header>
    );
}

export default Header;