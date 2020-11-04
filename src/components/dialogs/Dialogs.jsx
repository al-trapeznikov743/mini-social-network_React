import React from 'react'
import styles from './Dialogs.module.sass'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message} />)
    let newMessageText = props.dialogsPage.newMessageText

    const sendMessage = () => {
        props.sendMessage()
    }
    const onUpdateMessage = (event) => {
        let body = event.target.value
        props.onUpdateMessage(body)
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
                                onChange={onUpdateMessage}
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