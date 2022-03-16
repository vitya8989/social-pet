import style from './Users_message.module.scss';

const Users_message = (props) => {
    if (props.incoming) {
        return (
            <div className={`${style.users_message} ${style.incoming}`}>
                <div className={`${style.users_message_content} ${style.incoming}`}>
                    <img src={props.img} alt=""/>
                    <div className={style.users_message_text}>{props.text}</div>
                </div>
            </div>
        );
    } else {
        return (
            <div className={style.users_message}>
                <div className={style.users_message_content}>
                    <img src={props.img} alt=""/>
                    <div className={style.users_message_text}>{props.text}</div>
                </div>
            </div>
        );
    }
}

export default Users_message;