import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../Components/common/FormsControls/FormControls";
import {required} from "../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../Redux/redux-store";
import s from '../Components/common/FormsControls/FormControls.module.css'


const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    return (
        <div>
            {props.isAuth && <Redirect to={'/profile'}/>}
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
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
            {createField('Email', 'email', [required], Input, null)}
            {createField('Password', 'password', [required], Input, null, {type: 'password'})}
            {createField(null, 'rememberMe', null, Input, 'remember me', {type: 'checkbox'})}
            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export default connect(mapStateToProps, {login})(Login);