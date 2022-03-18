import Sidebar from "./Sidebar/Sidebar";
import style from './Main.module.scss';
import Content from "./Content/Content";


const Main = (props) => {
    return (
        <main className={style.main}>
            <div className="container">
                <div className={style.content}>
                    <Sidebar sidebar={props.state.sidebar}/>
                    <Content state={props.state}/>
                </div>
            </div>
        </main>
    );
}

export default Main;