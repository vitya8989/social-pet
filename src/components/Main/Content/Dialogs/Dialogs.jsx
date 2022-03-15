import style from './Dialogs.module.scss';
import Users_list from "./Users_list/Users_list";
import Users_messages_wrapper from "./Users_messages_wrapper/Users_messages_wrapper";

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <Users_list usersData={props.dialogsData.usersData}/>
            <Users_messages_wrapper usersMessagesData={props.dialogsData.usersMessagesData}/>
        </div>
    );
}

export default Dialogs;