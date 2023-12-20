import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../Components/common/FormsControls/FormControls";
import {required} from "../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../Redux/redux-store";
import s from '../Components/common/FormsControls/FormControls.module.css';
import style from './Login.module.css';
import  AvatarLoginPage from '../img/icons8-male-user-100.png'



const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    return (
        <div className={style.loginPageWrapper}>
            {props.isAuth && <Redirect to={'/profile'}/>}
            <div className={style.formWrapper}>
                <div>
                    <img src={AvatarLoginPage} alt='avatar'/>
                </div>
                <div>
                    <h2>Email: free@samuraijs.com</h2>
                    <h2>Password: free</h2>
                </div>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
};
type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={style.formInputs}>
                {createField('Email', 'email', [required], Input, null)}
            </div>
            <div className={style.formInputs}>
                {createField('Password', 'password', [required], Input, null, {type: 'password'})}
            </div>
            <div className={style.formCheckbox }>
                {createField(null, 'rememberMe', null, Input, 'remember me', {type: 'checkbox'})}
            </div>
            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div className={style.formButtonWrapper}>
                <button className={style.formButton}>Login</button>
            </div>
        </form>
    );
};

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export default connect(mapStateToProps, {login})(Login);