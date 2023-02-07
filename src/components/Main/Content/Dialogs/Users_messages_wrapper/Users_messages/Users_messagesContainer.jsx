import {AMActionCreator, UNMTActionCreator} from "../../../../../../redux/dialogs-reducer";
import Users_messages from "./Users_messages";

const Users_messagesContainer = (props) => {
    let sendMessage = () => {
        let action = AMActionCreator();
        props.store.dispatch(action);
    }

    const updateMessageText = (updateText) => {
        let action = UNMTActionCreator(updateText);
        props.store.dispatch(action);
    }

    return (
        <Users_messages dialogs={props.store.getState().dialogs} sendMessage={sendMessage} updateMessageText={updateMessageText}/>
    );
}

export default Users_messagesContainer;