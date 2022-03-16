import style from './User.module.scss';
import {NavLink} from "react-router-dom";

const setActiveUser = ({ isActive }) => style.user + " " + (isActive ? style.active : "");

const User = (props) => {
    return (
        <div className={style.user_wr}>
            <NavLink to={"/dialogs/" + props.id}  className={setActiveUser} >
                <div className={style.user_row}>
                    <img src={props.img} alt="" className={style.user_img}/>
                    <div className={style.user_name}>{props.name}</div>
                </div>
            </NavLink>
        </div>
    );
}

export default User;