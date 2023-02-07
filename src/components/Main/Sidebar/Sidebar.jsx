import style from './Sidebar.module.scss';
import Nav from "./Nav/Nav";
import FriendsContainer from "./Friends/FriendsContainer";

const Sidebar = (props) => {

    return (
        <div className={style.sidebar}>
            <Nav />
            <FriendsContainer store={props.store}/>
        </div>
    );
}

export default Sidebar;