import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {Field, reduxForm} from 'redux-form'
import {login} from '../../redux/actions/authActions'
import {AppStateType} from '../../redux/reduxStore'
import {maxLengthCreator, required} from '../../utils/validators/validators'
import {Input} from '../common/formControls/FormControls'

// типизировать maxLengthCreator
const maxLength = maxLengthCreator(30)

type LoginFormPropsType = {
    handleSubmit: () => void
    captchaURL: string | null
    error: any

}

const LoginForm: React.FC<LoginFormPropsType> = (props) => {
    console.log('loginform')
    return <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'email'} name={'email'} component={Input} validate={[required, maxLength]}/>
                </div>
                <div>
                    <Field
                        placeholder={'password'}
                        name={'password'}
                        component={Input}
                        validate={[required, maxLength]}
                        // type={'password'}
                    />
                </div>
                <div>
                    <Field type={'checkbox'} name={'rememberMe'} component={'input'} /> remember me
                </div>
                {/* this is check captcha */}
                {props.captchaURL
                    && <div>
                        <img src={props.captchaURL} alt='captha-img'/>
                        <Field
                            placeholder={'Enter captcha'}
                            name={'captcha'}
                            component={Input}
                            validate={[required]}
                        />
                    </div>}

                {/* добавить норм валидацию здесь и в profilePosts and messages */}
                {props.error && <div>{props.error}</div>}
                <div>
                    <button>log in</button>
                </div>
    </form>
}
// @ts-ignore
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


// Login types
type LoginOwnPropsType = {}
type LoginStatePropsType = {
    isAuth: boolean
    captchaURL: string | null
}
type LoginDispatchPropsType = {
    login: (
        email: string,
        password: string,
        remember: boolean,
        captcha: string | null
    ) => void
}

type LoginPropsType = LoginOwnPropsType
    & LoginStatePropsType
    & LoginDispatchPropsType

// разобраться с типизацией передаваемых форме значений и т.д.
const Login: React.FC<LoginPropsType> = (props) => {
    const onSubmit = (formData: any) => {
        const {email, password, remember, captcha} = formData
        props.login(email, password, remember, captcha)
    }
    if(props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return <div>
        <h1>LOGIN</h1>
        {/* @ts-ignore */}
        <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL} />
    </div>
}

const mapStateToProps = (state: AppStateType): LoginStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        captchaURL: state.auth.captchaURL
    }
}

export default connect<
    LoginStatePropsType,
    LoginDispatchPropsType,
    LoginOwnPropsType,
    AppStateType>(mapStateToProps, {login})(Login)