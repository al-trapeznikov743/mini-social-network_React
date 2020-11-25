import {sendMessage} from '../../redux/actions/dialogsActions'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

export default compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect
)(Dialogs)