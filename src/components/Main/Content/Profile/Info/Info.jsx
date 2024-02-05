import style from './Info.module.scss';
import Preloader from "../../../../common/Preloader/Preloader";
// import Status from "../Status/Status";
import StatusWithHooks from "../Status/StatusWithHooks";
import userPhoto from "../../../../../assets/img/user.png";
import {useState} from "react";
import ProfileDataForm from './ProfileDataForm';

const Contacts = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <>
            {profile.fullName && <div className={style.info_name}>
                {profile.fullName}
            </div>}
            <div>
                <div className={style.infoJob}>
                    {profile.lookingForAJob && <div>В поисках работы</div>}
                    {profile.lookingForAJobDescription && <div>{profile.lookingForAJobDescription}</div>}
                </div>
                {profile.aboutMe && <div className={style.infoAbout}>
                    <h4>Обо мне</h4>
                    <div>{profile.aboutMe}</div>
                </div>}
                {profile.contacts && <div className={style.infoContacts}>
                    <h4>Контакты</h4>
                    {Object.keys(profile.contacts).map(key => {
                        if (profile.contacts[key]) {
                            return <Contacts contactTitle={key} key={key} contactValue={profile.contacts[key]}/>
                        }
                    })}
                </div>}
            </div>
            {isOwner && <button className={style.infoEditBtn} onClick={goToEditMode}>edit</button>}
        </>
    )
}

const Info = (props) => {
    if (!props.profile) {
        return (<Preloader />)
    }

    const [editMode, setEditMode] = useState(false);

    const goToEditMode = () => {
        setEditMode(true);
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }
    const onSubmit = (formData) => {
        props.saveProfile(formData)
            .then(() => {
            setEditMode(false)
        });
    }

    return (
        <>
            <div className={style.info}>
                {props.owner ?
                    <div>
                        <label className={style.info_img}>
                            <input type={'file'} onChange={onMainPhotoSelected}/>
                            <img src={props.profile.photos?.small || userPhoto} alt=""/>
                        </label>
                    </div>
                    :
                    <div className={style.info_img}>
                        <img src={props.profile.photos?.small || userPhoto} alt=""/>
                    </div>}
            </div>
            { editMode
                ?
                <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/>
                :
                <ProfileData
                    profile={props.profile}
                    isOwner={props.owner}
                    goToEditMode={goToEditMode}
                />
            }
            <StatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </>
    );
}

export default Info;