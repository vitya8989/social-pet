import style from './Login.module.scss';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {authLogin, setIsFetching} from "../../../../redux/auth-reducer";
import {Input} from "../../../common/FormsControls/FormsControls";
import {required} from "../../../../utils/validators/validators";
import {Navigate} from "react-router-dom";
import React from "react";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.login__form}>
            <div className={style.login__form_input}>
                <Field component={Input} validate={[required]} name={'email'} type={'email'} placeholder={'Login'}/>
            </div>
            <div className={style.login__form_input}>
                <Field component={Input} validate={[required]} type={'password'} name={'password'} placeholder={'Password'}/>
            </div>
            <div className={style.login__form_remember}>
                <label>
                    <Field component={'input'} name={'rememberMe'} type={'checkbox'}/>
                    Remember me
                </label>
            </div>
            <div className={style.login__form_submit}>
                <button>Send</button>
            </div>

            {props.captchaUrl && <img src={props.captchaUrl}/>}
            {props.captchaUrl &&  <div className={style.login__form_input}>
                <Field component={Input} validate={[required]} name={'captcha'} type={'text'} placeholder={'symbols'}/>
            </div>}
            {props.error && <div className={style.login__form_error}>{props.error}</div>}
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    if (props.isAuth) {
        return <Navigate to={'/'} />
    }
    const onSubmit = (formData) => {
      props.setIsFetching(true);
      props.authLogin(formData);
    };
    if (props.captchaUrl) {
        props.setIsFetching(false);
    }
    return (
        <div className={style.login}>
            <h1 className={style.login__title}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isLogin,
    captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, {authLogin, setIsFetching})(Login)