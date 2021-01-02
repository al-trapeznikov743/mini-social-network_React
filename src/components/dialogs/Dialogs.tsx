import React from 'react'
import styles from './Dialogs.module.sass'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {Field, reduxForm} from 'redux-form'
import {Textarea} from '../common/formControls/FormControls'
import {maxLengthCreator, required} from '../../utils/validators/validators'
import {DialogsContainerPropsType} from './DialogsContainer'


const Dialogs: React.FC<DialogsContainerPropsType> = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(
        dialog => <DialogItem
                    name={dialog.name}
                    id={dialog.id}
                    key={dialog.id} />
    )
    let messagesElements = props.dialogsPage.messages.map(
        message => <Message
                    message={message.message}
                    key={message.id}/>
    )

    // типизировать value
    const sendMessage = (value: any) => {
        props.sendMessage(value.newMessageBody)
    }

    return  <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={styles.messages}>
                    <div>
                        {messagesElements}
                    </div>
                    <AddMessageReduxForm onSubmit={sendMessage} />
                </div>
            </div>
}

const maxLength = maxLengthCreator(100)

const AddMessageForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
                <div>
                    <Field
                        component={Textarea}
                        validate={[required, maxLength]}
                        name={'newMessageBody'}
                        placeholder={'Enter your message'}
                    />
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
}

const AddMessageReduxForm = reduxForm({form: 'dialogsAddMessage'})(AddMessageForm)

export default Dialogs