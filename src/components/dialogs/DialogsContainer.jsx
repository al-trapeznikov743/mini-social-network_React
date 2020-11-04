import {sendMessageActionCreator, updateNewMessageActionCreator} from '../../redux/actions/dialogsActions'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        onUpdateMessage: (text) => {
            dispatch(updateNewMessageActionCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer