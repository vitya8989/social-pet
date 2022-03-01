import Nav from "./Nav/Nav";
import Profile from "./Profile/Profile";
import style from './Main.module.css';


const Main = () => {
    return (
        <main className={style.main}>
            <div className="container">
                <div className={style.content}>
                    <Nav />
                    <Profile />
                </div>
            </div>
        </main>
    );
}

export default Main;