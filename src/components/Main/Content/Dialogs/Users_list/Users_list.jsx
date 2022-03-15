import style from './Users_list.module.scss';
import User from "./User/User";

const Users_list = (props) => {
    let usersElements = props.usersData.map(user => <User name={user.name} id={user.id}/>);
    return (
        <div className={style.users}>
            {usersElements}
        </div>
    );
}

export default Users_list;