import style from './Users_messages_wrapper.module.scss';
import Users_messagesContainer from "./Users_messages/Users_messagesContainer";
import Messages_default from "./Messages_default/Messages_default";

const Users_messages_wrapper = (props) => {

    let dialogNotChosen = true
    let dialogChosen = true;

    return (
        <div className={style.users_messages_wrapper}>
            {/*{dialogNotChosen && <Messages_default />}*/}
            {dialogChosen && <Users_messagesContainer />}
        </div>
    );
}

export default Users_messages_wrapper;