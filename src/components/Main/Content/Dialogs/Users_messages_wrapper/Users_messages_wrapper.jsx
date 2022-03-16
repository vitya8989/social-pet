import style from './Users_messages_wrapper.module.scss';
import Users_messages from "./Users_messages/Users_messages";

const Users_messages_wrapper = (props) => {
    return (
        <div className={style.users_messages_wrapper}>
            <Users_messages usersMessages={props.usersMessages}/>
        </div>
    );
}

export default Users_messages_wrapper;