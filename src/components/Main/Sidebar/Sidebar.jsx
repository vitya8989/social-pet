import style from './Sidebar.module.scss';
import { NavLink } from 'react-router-dom';
import Nav from "./Nav/Nav";
import Friends from "./Friends/Friends";

const Sidebar = (props) => {
    return (
        <div className={style.sidebar}>
            <Nav />
            <Friends friends={props.sidebar.friends}/>
        </div>
    );
}

export default Sidebar;