import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {Field, reduxForm} from 'redux-form'
import {login} from '../../redux/actions/authActions'
import {maxLengthCreator, required} from '../../utils/validators/validators'
import {Input} from '../common/formControls/FormControls'

const maxLength = maxLengthCreator(30)

const LoginForm = (props) => {
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

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        const {email, password, remember, captcha} = formData
        props.login(email, password, remember, captcha)
    }
    if(props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL} />
    </div>
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaURL: state.auth.captchaURL
    }
}

export default connect(mapStateToProps, {login})(Login) 