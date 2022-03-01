import Nav from "./Nav";
import Profile from "./Profile";
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