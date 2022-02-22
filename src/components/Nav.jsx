const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav__links_top">
                <div className="nav__link"><a href="#">Моя страница</a></div>
                <div className="nav__link"><a href="#">Сообщения</a></div>
                <div className="nav__link"><a href="#">Новости</a></div>
                <div className="nav__link"><a href="#">Музыка</a></div>
            </div>
            <div className="nav__links_bottom">
                <div className="nav__link"><a href="#">Настройки</a></div>
            </div>
        </nav>
    );
}

export default Nav;