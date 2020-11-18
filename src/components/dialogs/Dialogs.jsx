import React from 'react'
import {Redirect} from 'react-router-dom'
import styles from './Dialogs.module.sass'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
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
    let newMessageText = props.dialogsPage.newMessageText

    const sendMessage = () => {
        props.sendMessage()
    }
    const updateMessage = (event) => {
        let body = event.target.value
        props.updateMessage(body)
    }

    if(!props.isAuth) {
        return <Redirect to='/login' />
    }

    return  <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={styles.messages}>
                    <div>
                        {messagesElements}
                    </div>
                    <div>
                        <div>
                            <textarea
                                placeholder='Enter your message'
                                value={newMessageText}
                                onChange={updateMessage}
                            >
                            </textarea>
                        </div>
                        <div>
                            <button onClick={sendMessage}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
}

export default Dialogs