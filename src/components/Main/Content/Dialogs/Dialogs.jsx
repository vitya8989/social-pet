import style from './Dialogs.module.scss';
import Users_messages_wrapper from "./Users_messages_wrapper/Users_messages_wrapper";
import Users_listContainer from "./Users_list/Users_listContainer";
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {

    if (!props.isLogin) return <Navigate to={'/login'} />;

    return (
        <div className={style.dialogs}>
            <Users_listContainer />
            <Users_messages_wrapper />
        </div>
    );
}

export default Dialogs;