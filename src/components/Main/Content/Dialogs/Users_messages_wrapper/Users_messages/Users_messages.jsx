import style from './Users_messages.module.scss';
import Users_message from "./Users_message/Users_message";
import Empty_message from "./Empty_message/Empty_message";
import React from 'react';

const Users_messages = (props) => {
    let usersMessagesElements = props.dialogs.usersMessages.length > 0 ? props.dialogs.usersMessages.map((userMessage, index) => <Users_message text={userMessage.text} incoming={userMessage.incoming} img={userMessage.img} key={index}/>) : <Empty_message />;

    let sendMessage = (e) => {
        e.preventDefault();
        props.sendMessage();
    }

    const updateMessageText = (e) => {
        let updateText = e.target.value;
        props.updateMessageText(updateText);
    }

    return (
        <div className={style.users_messages}>
                {usersMessagesElements}
                <form className={style.users_messages_panel}>
                    <textarea value={props.dialogs.newMessageText} onChange={updateMessageText}></textarea>
                    <button onClick={ sendMessage }>Отправить</button>
                </form>
        </div>
    );
}

export default Users_messages;