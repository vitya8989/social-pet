import style from './Dialogs.module.scss';
import Users_list from "./Users_list/Users_list";
import Users_messages_wrapper from "./Users_messages_wrapper/Users_messages_wrapper";

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <Users_list users={props.dialogs.users}/>
            <Users_messages_wrapper usersMessages={props.dialogs.usersMessages}/>
        </div>
    );
}

export default Dialogs;