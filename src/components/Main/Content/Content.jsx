import style from './Content.module.scss';
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import { Routes, Route } from "react-router-dom";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

const Content = () => {
    return (
        <div className={style.content}>
            <Routes>
                <Route path="*" element={<Profile/>} />
                <Route path="/" element={<Profile />} />
                <Route path="/dialogs" element={<Dialogs />} />
                <Route path="/news" element={<News />} />
                <Route path="/music" element={<Music />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </div>
    );
}

export default Content;