import style from './Friend.module.scss';

const Friend = (props) => {
    return (
        <div className={style.friend}>
            <div className={style.friend_img}>
                <img src={props.img} alt=""/>
            </div>
            <div className={style.friend_name}>
                {props.name}
            </div>
        </div>
    );
}

export default Friend;