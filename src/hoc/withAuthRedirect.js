import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
    isLogin: state.auth.isLogin
})

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render () {
            if (!this.props.isLogin) return <Navigate to={'/login'} />;
            return <Component {...this.props} />
        }
    }

    return connect(mapStateToProps)(RedirectComponent);
}