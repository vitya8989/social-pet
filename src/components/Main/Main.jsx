import Sidebar from "./Sidebar/Sidebar";
import style from './Main.module.scss';
import Content from "./Content/Content";


const Main = (props) => {
    return (
        <main className={style.main}>
            <div className="container">
                <div className={style.content}>
                    <Sidebar store={props.store}/>
                    <Content store={props.store}/>
                </div>
            </div>
        </main>
    );
}

export default Main;