import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../Components/common/FormsControls/FormControls";
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

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} type={'password'} name={'password'} component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={'checkbox'}/>remember me
            </div>
            {props.error && <div className={s.formSummaryError}>
                {props.error}
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