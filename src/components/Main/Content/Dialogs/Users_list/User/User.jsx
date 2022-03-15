import style from './User.module.scss';
import {NavLink} from "react-router-dom";

const setActiveUser = ({ isActive }) => style.user + " " + (isActive ? style.active : "");

const User = (props) => {
    return (
        <div>
            <NavLink to={"/dialogs/" + props.id}  className={setActiveUser} >
                {props.name}
            </NavLink>
        </div>
    );
}

export default User;