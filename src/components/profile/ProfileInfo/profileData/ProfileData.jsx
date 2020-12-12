import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {maxLength, required} from '../../../../utils/validators/validators'
import {Input, Textarea} from '../../../common/formControls/FormControls'

export const ProfileData = ({profile, isOwner, toggleEditMode}) => {
    return <div>
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? 'Yes' : 'No'}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
                return <Contact contactTitle={key} contactValue={profile.contacts[key]} />
            })}
        </div>
        {isOwner && <div><button onClick={toggleEditMode}>Edit</button></div>}
    </div>
}

const ProfileDataForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <b>Full name</b>:
            <Field
                component={Input}
                validate={[required, maxLength]}
                name={'fullName'}
                placeholder={'Full name'}
            />
        </div>
        <div>
            <b>Looking for a job</b>:
            <Field type={'checkbox'} name={'lookingForAJob'} component={'input'} />
        </div>
        <div>
            <Field
                component={Textarea}
                validate={[required, maxLength]}
                name={'lookingForAJobDescription'}
                placeholder={'My professional skills'}
            />
        </div>
        <div>
            <b>About me</b>:
            <Field
                component={Textarea}
                validate={[required, maxLength]}
                name={'aboutMe'}
                placeholder={'About me'}
            />
        </div>
        <div>
            <b>Contacts: </b> {Object.keys(props.profile.contacts).map(key => {
                return <div>
                    <b>{key}: </b>
                    <Field
                        component={Input}
                        validate={[maxLength]}
                        name={'contacts.'+ key}
                        placeholder={key}
                    />
                </div>
            })}
        </div>
        {props.error && <div>{props.error}</div>}
        <div>
            <button>Save</button>
        </div>
    </form>
}

export const ProfileDataFormContainer = reduxForm({form: 'editProfile'})(ProfileDataForm)


const Contact = ({contactTitle, contactValue}) => {
    return <div>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}