import style from './Info.module.scss';
import Preloader from "../../../../common/Preloader/Preloader";
import Status from "../Status/Status";

const Info = (props) => {
    if (!props.profile) {
        return (<Preloader />)
    }
    return (
        <>
            <div className={style.info}>
                {props.profile.photos?.small && <div className={style.info_img}>
                    <img src={props.profile.photos?.small} alt=""/>
                </div>}
                <div>
                    {props.profile.fullName && <div className={style.info_name}>
                        {props.profile.fullName}
                    </div>}
                    <div>
                        {props.profile.aboutMe && <div>{props.profile.aboutMe}</div>}
                        {props.profile.contacts?.facebook && <div>{props.profile.contacts?.facebook}</div>}
                        {props.profile.contacts?.github && <div>{props.profile.contacts?.github}</div>}
                        {props.profile.contacts?.instagram && <div>{props.profile.contacts?.instagram}</div>}
                        {props.profile.contacts?.mainLink && <div>{props.profile.contacts?.mainLink}</div>}
                        {props.profile.contacts?.twitter && <div>{props.profile.contacts?.twitter}</div>}
                        {props.profile.contacts?.vk && <div>{props.profile.contacts?.vk}</div>}
                        {props.profile.contacts?.website && <div>{props.profile.contacts?.website}</div>}
                        {props.profile.contacts?.youtube && <div>{props.profile.contacts?.youtube}</div>}
                        {props.profile.lookingForAJob && <div>В поисках работы</div>}
                        {props.profile.lookingForAJobDescription && <div>{props.profile.lookingForAJobDescription}</div>}
                    </div>
                </div>
            </div>
            <Status status={props.status} updateStatus={props.updateStatus}/>
        </>
    );
}

export default Info;