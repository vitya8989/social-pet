import style from './Status.module.scss';
import React, {useEffect, useState} from "react";

const StatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    // componentDidUpdate(prevProps) {
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({
    //             status: this.props.status
    //         })
    //     }
    // }

    return (
        <div className={style.status}>
            {!editMode ? <div className={style.statusValue} onDoubleClick={activateEditMode}>
                <span>{props.status || '------'}</span>
            </div> :
            <form className={style.statusForm}>
                    <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange} value={status}/>
                </form>
            }

        </div>
    );
}

export default StatusWithHooks;