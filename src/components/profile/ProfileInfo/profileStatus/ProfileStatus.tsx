import React, {useState, useEffect} from 'react'
// import {profileAPI} from '../../../../api/api'
// import styles from '../ProfileInfo.module.sass'


type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatus: React.FC<ProfileStatusPropsType> = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    /* let localState = useState(false)
    let editMode = localState[0]
    const setEditMode = localState[1] */

    const toggleActivateEditMode = () => {
        if(editMode) {
            setEditMode(false)
            props.updateStatus(status)
        } else {
            setEditMode(true)
        }
    }

    // типизировать event
    const onStatusChange = (event: any) => {
        setStatus(event.currentTarget.value)
    }

    return <>
        {editMode
            ? <div>
                <input
                    autoFocus={true}
                    onBlur={toggleActivateEditMode}
                    onChange={onStatusChange}
                    value={status}
                ></input>
            </div>
            : <div>
                <b>Status: </b><span onDoubleClick={toggleActivateEditMode}>{props.status || 'add status'}</span>
            </div>}
    </>
}

export default ProfileStatus