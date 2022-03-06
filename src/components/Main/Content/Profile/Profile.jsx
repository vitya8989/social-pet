import style from './Profile.module.scss';
import MyPostsWall from "./MyPostsWall/MyPostsWall";
import Info from "./Info/Info";

const Profile = () => {
    return (
        <div>
            <div className={style.img}>
                <img src="https://user-images.githubusercontent.com/88069082/149673405-b47f71c1-0777-4038-9247-5b0c9d166f22.jpg" alt=""/>
            </div>
            <Info />
            <MyPostsWall />
        </div>
    );
}

export default Profile;