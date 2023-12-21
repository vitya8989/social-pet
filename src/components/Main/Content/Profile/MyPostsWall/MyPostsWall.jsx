import style from './MyPostsWall.module.scss';
import MyPost from "./MyPost/MyPost";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../../utils/validators/validators";
import {Textarea} from "../../../../common/FormsControls/FormsControls";
import React from "react";

const maxLength = maxLengthCreator(10);

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} validate={[required, maxLength]} name={'newPostText'} className={style.wall_textarea} placeholder={'Your text'}/>
            <div className={style.wall_btn_wr}>
                <button className={style.wall_btn}>Опубликовать</button>
            </div>
        </form>
    )
}

const NewPostReduxForm = reduxForm({form: 'newPost'})(NewPostForm)

const MyPostsWall = React.memo((props) => {
    let myPostsElements = props.profile.myPosts.map( myPost => <MyPost img={props.profile.profile?.photos?.small ? props.profile.profile?.photos?.small : 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'} text={myPost.text} count_likes={myPost.countLikes} key={myPost.id} id={myPost.id}/> )

    const onSubmit = (formData) => {
        props.addPost(formData.newPostText);
    };

    return (
        <div className={style.wall}>
            <div className={style.wall_title}>Моя стена</div>
            {!props.profile.profile?.userId && <div className={style.wall_form_wr}>
                <NewPostReduxForm onSubmit={onSubmit} />
            </div>}
            <div className={style.wall_posts}>
                { myPostsElements }
            </div>
        </div>
    );
});

export default MyPostsWall;