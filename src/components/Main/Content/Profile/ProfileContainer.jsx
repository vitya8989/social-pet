import Profile from "./Profile";
import React from "react";
import {connect} from "react-redux";
import {getUserProfileData, getStatus, updateStatus, savePhoto, saveProfile} from '../../../../redux/profile-reducer';
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

    refreshProfile () {
        let userId = this.props.match?.params?.userId;
        if (!userId) {
            userId = this.props.myId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }

        this.props.getUserProfileData(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match?.params?.userId !== this.props.match?.params?.userId) {
            this.refreshProfile();
        }
    }

    render() {

        return (
           <Profile {...this.props} owner={!this.props.match?.params?.userId} savePhoto={this.props.savePhoto} saveProfile={this.props.saveProfile} profile={this.props.profile} updateStatus={this.props.updateStatus}/>
        );
    }
}
let mapStateToProps = (state) => ({
    profile: state.profile.profile,
    status: state.profile.status,
    myId: state.auth.id,
});

export default compose(
    connect(mapStateToProps, {getUserProfileData, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)