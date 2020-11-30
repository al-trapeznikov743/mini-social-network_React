import React from 'react'
// import {profileAPI} from '../../../../api/api'
// import styles from '../ProfileInfo.module.sass'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    /* componentDidMount() {
        profileAPI.getStatus()
    } */

    toggleActivateEditMode = () => {

        /* this.setState({
            editMode: !this.state.editMode
        }) */
        if(this.state.editMode) {
            this.setState({
                editMode: false
            })
            this.props.updateStatus(this.state.status)
        } else {
            this.setState({
                editMode: true
            })
        }
    }
    onStatusChange = (event) => {
        this.setState({
            status: event.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <>
            {this.state.editMode
                ? <div>
                    <input
                        autoFocus={true}
                        onBlur={this.toggleActivateEditMode}
                        onChange={this.onStatusChange}
                        value={this.state.status}
                    ></input>
                </div>
                : <div>
                    <span onDoubleClick={this.toggleActivateEditMode}>{this.props.status || 'add status'}</span>
                </div>}
        </>
    }
}

export default ProfileStatus