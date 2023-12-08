import style from './Users_messages.module.scss';
import Users_message from "./Users_message/Users_message";
import Empty_message from "./Empty_message/Empty_message";
import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../../../../utils/validators/validators";

const maxLength = maxLengthCreator(30);

const NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.users_messages_panel}>
            <Field component={Textarea} name={'message'} validate={[required, maxLength]} className={style.users_messages_textarea}/>
            <button>Отправить</button>
        </form>
    )
}

const NewMessageReduxForm = reduxForm({form: 'newMessage'})(NewMessageForm)

const Users_messages = (props) => {
    let usersMessagesElements = props.dialogs.usersMessages.length > 0 ? props.dialogs.usersMessages.map((userMessage, index) => <Users_message text={userMessage.text} incoming={userMessage.incoming} img={userMessage.img} key={index}/>) : <Empty_message />;

    const onSubmit = (formData) => {
        props.sendMessage(formData.message);
    };

    return (
        <div className={style.users_messages}>
                {usersMessagesElements}
                <NewMessageReduxForm onSubmit={onSubmit} />
        </div>
    );
}

export default Users_messages;