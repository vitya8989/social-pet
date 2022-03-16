import style from './Users_messages_wrapper.module.scss';
import {Route} from "react-router-dom";
import Users_messages from "./Users_messages/Users_messages";
import Messages_default from "./Messages_default/Messages_default";

const Users_messages_wrapper = (props) => {
    return (
        <div className={style.users_messages_wrapper}>
            <Users_messages usersMessages={props.usersMessages}/>
        </div>
    );
}

export default Users_messages_wrapper;