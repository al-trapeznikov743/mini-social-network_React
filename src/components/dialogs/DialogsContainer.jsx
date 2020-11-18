import {sendMessage, updateMessage} from '../../redux/actions/dialogsActions'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const DialogsContainer = connect(mapStateToProps, {sendMessage, updateMessage})(Dialogs)

export default DialogsContainer