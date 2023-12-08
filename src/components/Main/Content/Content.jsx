import style from './Content.module.scss';
import { Routes, Route } from "react-router-dom";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import FindUsersContainer from "./FindUsers/FindUsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import DialogsContainer from "./Dialogs/DialogsContainer";
import Login from "./Login/Login";


const Content = (props) => {
    return (
        <div className={style.content}>
            <Routes>
                <Route path="/" element={<ProfileContainer />} />
                <Route path="/profile/:userId" element={<ProfileContainer />} />
                <Route path="/dialogs/*" element={<DialogsContainer />} />
                <Route path="/find-users/" element={<FindUsersContainer />} />
                <Route path="/news" element={<News />} />
                <Route path="/music" element={<Music />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default Content;