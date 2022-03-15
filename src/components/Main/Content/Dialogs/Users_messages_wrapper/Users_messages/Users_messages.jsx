import style from './Users_messages.module.scss';
import Users_message from "./Users_message/Users_message";
import Empty_message from "./Empty_message/Empty_message";

const Users_messages = (props) => {
    let usersMessagesElements = (props.usersMessagesData.length > 0) ? props.usersMessagesData.map(userMessage => <Users_message text={userMessage.text}/>) : <Empty_message />;
    return (
        <div className={style.users_messages}>
                {usersMessagesElements}
        </div>
    );
}

export default Users_messages;