import Profile from "./Profile";
import React from "react";
import {connect} from "react-redux";
import {getUserProfileData, getStatus, updateStatus} from '../../../../redux/profile-reducer';
import {useParams} from "react-router-dom";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {compose} from "redux";

const withRouter = (Component) => (props) => {
     let params = useParams();
    return (
        <Component
            {...props}
            match ={{ params }}
        />
    );
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getUserProfileData(this.props.match?.params?.userId);
        this.props.getStatus(this.props.match?.params?.userId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match?.params?.userId !== this.props.match?.params?.userId) {
            this.props.getUserProfileData(this.props.match?.params?.userId);
            this.props.getStatus(this.props.match?.params?.userId);
        }
    }

    render() {

        return (
           <Profile {...this.props} profile={this.props.profile} updateStatus={this.props.updateStatus}/>
        );
    }
}
let mapStateToProps = (state) => ({
    profile: state.profile.profile,
    status: state.profile.status,
});

export default compose(
    connect(mapStateToProps, {getUserProfileData, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)