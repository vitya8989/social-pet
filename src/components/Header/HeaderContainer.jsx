import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authCheck, authLogout, setIsFetching} from "../../redux/auth-reducer";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authCheck()
    }

    render() {
        return <>
                {this.props.auth.isFetching && <Preloader />}
                <Header {...this.props} />
            </>
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}

export default compose(connect(mapStateToProps, {authCheck, authLogout, setIsFetching}))(HeaderContainer);