import style from './Profile.module.scss';
import MyPostsWallContainer from "./MyPostsWall/MyPostsWallContainer";
import Info from "./Info/Info";

const Profile = (props) => {
    return (
        <div>
            <div className={style.img}>
                <img src="https://user-images.githubusercontent.com/88069082/149673405-b47f71c1-0777-4038-9247-5b0c9d166f22.jpg" alt=""/>
            </div>
            <Info />
            <MyPostsWallContainer
                store={props.store}
            />
        </div>
    );
}

export default Profile;