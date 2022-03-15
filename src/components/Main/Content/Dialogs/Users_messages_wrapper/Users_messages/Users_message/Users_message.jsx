import style from './Users_message.module.scss';

const Users_message = (props) => {
    return (
        <div className={style.users_message}>
            {props.text}
        </div>
    );
}

export default Users_message;