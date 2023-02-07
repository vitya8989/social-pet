import style from './Friends.module.scss';
import Friend from "./Friend/Friend";

const Friends = (props) => {
    let friends = [];
    if (props.friends.length > 3) {
        for (let i = 0; i < 3; i++) {
            friends.push(<Friend img={props.friends[i].img} name={props.friends[i].name} key={i} />)
        }
    } else {
        friends = props.friends.map( (friend, index) => <Friend img={friend.img} name={friend.name} key={index}/> )
    }

    return (
        <div className={style.friends}>
            <div className={style.friends_title}>Мои друзья</div>
            <div className={style.friends_wrap}>
                {friends}
            </div>
        </div>
    );
}

export default Friends;