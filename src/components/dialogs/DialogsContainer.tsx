import {sendMessage} from '../../redux/actions/dialogsActions'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {DialogsInitialStateType} from '../../redux/reducer/dialogsReducer'
import {AppStateType} from '../../redux/reduxStore'

type DialogsContainerOwnPropsType = {}
type DialogsContainerStatePropsType = {
    dialogsPage: DialogsInitialStateType
}
type DialogsContainerDispatchPropsType = {
    sendMessage: (messageBody: string) => void
}

export type DialogsContainerPropsType = DialogsContainerOwnPropsType
    & DialogsContainerStatePropsType 
    & DialogsContainerDispatchPropsType

const mapStateToProps = (state: AppStateType): DialogsContainerStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

export default compose(
    connect<
    DialogsContainerStatePropsType,
    DialogsContainerDispatchPropsType,
    DialogsContainerOwnPropsType,
    AppStateType>(mapStateToProps, {sendMessage}),
    withAuthRedirect
)(Dialogs)