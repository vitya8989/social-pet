import Nav from "./Nav/Nav";
import style from './Main.module.scss';
import Content from "./Content/Content";


const Main = (props) => {
    return (
        <main className={style.main}>
            <div className="container">
                <div className={style.content}>
                    <Nav />
                    <Content state={props.state}/>
                </div>
            </div>
        </main>
    );
}

export default Main;