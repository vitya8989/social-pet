import {connect} from "react-redux";
import Users_list from "./Users_list";

let mapStateToProps = (state) => {
    return {
        users: state.dialogs.users,
    }
}

const Users_listContainer = connect(mapStateToProps)(Users_list);

export default Users_listContainer;