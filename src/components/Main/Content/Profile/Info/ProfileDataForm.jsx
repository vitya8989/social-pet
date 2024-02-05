import style from "./Info.module.scss";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../../common/FormsControls/FormsControls";
import {required} from "../../../../../utils/validators/validators";
import React from "react";

const ProfileDataForm = ({profile, handleSubmit, error}) => {
    return (
        <form className={style.infoForm} onSubmit={handleSubmit}>
            <div className={style.infoInputBlock}>
                Имя: <Field component={Input} validate={[required]} name={'fullName'} type={'text'} placeholder={''}/>
            </div>
            <div className={style.infoInputBlock}>
                <label>
                    <Field component={'input'} name={'lookingForAJob'} type={'checkbox'}/>
                    В поисках работы
                </label>
            </div>
            <div className={style.infoInputBlock}>
                <div>Навыки: <Field component={Input} validate={[required]} name={'lookingForAJobDescription'} type={'text'} placeholder={''}/></div>
            </div>
            <div className={style.infoInputBlock}>
                Обо мне: <Field component={Input} validate={[required]} name={'aboutMe'} type={'text'} placeholder={''}/>
            </div>
            <div className={style.infoInputBlock}>
                <h4>Контакты</h4>
                {Object.keys(profile.contacts).map(key => {
                    return <div className={style.infoInputBlock} key={key}>{key}: <Field component={Input} validate={[]} name={`contacts.${key}`} type={'text'} placeholder={''}/></div>
                })}
            </div>
            {error && <div className={style.infoFormError}>{error}</div>}
            <button className={style.infoEditBtn}>save</button>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;