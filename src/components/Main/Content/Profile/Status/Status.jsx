import style from './Status.module.scss';
import React from "react";

class Status extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    OnStatusChange = (e) => {
       this.setState({
           status: e.currentTarget.value
       })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render () {
        return (
            <div className={style.status}>
                {!this.state.editMode ?
                    <div className={style.statusValue} onDoubleClick={this.activateEditMode}>
                        <span>{this.props.status || '------'}</span>
                    </div>
                :
                    <form className={style.statusForm}>
                        <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} onChange={this.OnStatusChange} />
                    </form>
                }

            </div>
        );
    }
}

export default Status;