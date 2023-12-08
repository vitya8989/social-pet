import style from './FindUsers.module.scss';
import userPhoto from "../../../../assets/img/user.png";
import {NavLink} from "react-router-dom";
import {followAPI} from "../../../../api/api";

const FindUsers = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    if (pageCount > 10) {
        for (let i = 1; i <= pageCount; i++) {
            if (props.currentPage < 4) {
                if (i > 5 && i < pageCount ) {
                    continue;
                } else if (i === 5) {
                    pages.push('...');
                } else {
                    pages.push(i);
                }
            } else if (props.currentPage > pageCount - 3) {
                if (i === 1) {
                    pages.push(i);
                } else if (i === 2) {
                    pages.push('...');
                } else if (i >= pageCount - 3) {
                    pages.push(i);
                } else {
                    continue;
                }
            } else {
                if (i === 1) {
                    pages.push(i);
                } else if (i === 2) {
                    pages.push('...');
                } else if (i >= props.currentPage - 1 && i <= props.currentPage + 1) {
                    pages.push(i);
                } else if (i === pageCount) {
                    pages.push(i);
                } else if (i === pageCount - 1) {
                    pages.push('...');
                } else {
                    continue;
                }
            }
        }
    } else {
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }
    }

    return (
        <div className={style.find_users}>
            <h1 className={style.find_users__title}>Список пользователей</h1>
            {pageCount > 0 && <div className={style.find_users__pagination}>
                {pages.map((page, index) => {
                    if (page !== '...') {
                        return <span key={index} onClick={(e) => {
                            props.onPageChanged(page)
                        }}
                                     className={style.find_users__pagination_link + (props.currentPage === page ? ' ' + style.active : '')}>{page}</span>
                    } else {
                        return <span key={index} className={style.find_users__pagination_dots}>{page}</span>
                    }
                })}
            </div>}
            <div className={style.find_users__items}>
                {
                    props.findUsersList.map(user => (
                        user.id !== props.myId ?
                        <div key={user.id} className={style.find_users__item}>
                            <div className={style.find_users__item_left}>
                                <NavLink to={'/profile/' + user.id} className={style.find_users__item_img}>
                                    <img src={user.photos.small ? user.photos.small : userPhoto} alt=""/>
                                </NavLink>
                                {user.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                        props.unfollow(user.id);
                                    }} className={style.find_users__item_followBtn}>Отписаться</button>
                                    : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                        props.follow(user.id);
                                    }} className={style.find_users__item_followBtn}>Подписаться</button>}
                            </div>
                            <div className={style.find_users__item_right}>
                                <div className={style.find_users__item_top}>
                                    <div className={style.find_users__item_name}>{user.name}</div>
                                    <div className={style.find_users__item_location}>
                                        <div className={style.find_users__item_country}>
                                            {user.location?.country}
                                        </div>
                                        <div className={style.find_users__item_city}>
                                            {user.location?.city}
                                        </div>
                                    </div>
                                </div>
                                <div className={style.find_users__item_status}>
                                    {user.status}
                                </div>
                            </div>
                        </div> : ''
                    ))
                }
            </div>
        </div>
    )
}
export default FindUsers;