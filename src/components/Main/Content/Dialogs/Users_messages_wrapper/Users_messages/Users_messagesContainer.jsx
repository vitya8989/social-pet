import {AMActionCreator} from "../../../../../../redux/dialogs-reducer";
import Users_messages from "./Users_messages";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (text) => {
            dispatch(AMActionCreator(text));
        },
    }
}

const Users_messagesContainer = connect(mapStateToProps, mapDispatchToProps)(Users_messages);

export default Users_messagesContainer;