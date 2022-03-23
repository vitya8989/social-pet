import style from './Users_messages.module.scss';
import Users_message from "./Users_message/Users_message";
import Empty_message from "./Empty_message/Empty_message";
import React from 'react';

const Users_messages = (props) => {

    let usersMessagesElements = (props.usersMessages.length > 0) ? props.usersMessages.map((userMessage) => <Users_message text={userMessage.text} incoming={userMessage.incoming} img={userMessage.img}/>) : <Empty_message />;

    let newMessageEl = React.createRef();

    let sendMessage = (e) => {
        e.preventDefault();
        let textMessage = newMessageEl.current.value;
        alert(textMessage);
    }

    return (
        <div className={style.users_messages}>
                {usersMessagesElements}
                <form className={style.users_messages_panel}>
                    <textarea ref={newMessageEl}></textarea>
                    <button onClick={ sendMessage }>Отправить</button>
                </form>
        </div>
    );
}

export default Users_messages;