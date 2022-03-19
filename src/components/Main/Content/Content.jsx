import style from './Content.module.scss';
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import { Routes, Route } from "react-router-dom";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import Main from "../Main";

const Content = (props) => {
    return (
        <div className={style.content}>
            <Routes>
                <Route path="*" element={<Profile profile={props.state.profile}/>} />
                <Route path="/profile" element={<Profile profile={props.state.profile}/>} />
                <Route path="/dialogs/*" element={<Dialogs dialogs={props.state.dialogs}/>} />
                <Route path="/news" element={<News />} />
                <Route path="/music" element={<Music />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </div>
    );
}

export default Content;