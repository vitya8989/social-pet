import style from './Header.module.scss';

const Header = () => {
    return (
        <header className={style.header}>
            <div className="container">
                <div className={style.content}>
                    <div className={style.logo}>
                        <img src="https://www.pngplay.com/wp-content/uploads/9/HP-Logo-Transparent-Background.png" alt=""/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;