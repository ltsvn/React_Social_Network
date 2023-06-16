import React, {FC, useEffect, useState} from 'react';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks: FC<ProfileStatusType> = ({status, updateStatus}) => {

        let [editMode, setEditMode] = useState(false)
        let [statusState, setStatusState] = useState(status)

        useEffect(() => {
            setStatusState(status)
        }, [status])

        const activateEditMode = () => {
            setEditMode(true)
        }
        const deactivateEditMode = () => {
            setEditMode(false)
            updateStatus(statusState)
        }
        const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setStatusState(e.currentTarget.value)
        }
        return (
            <div>
                {!editMode &&
                    <div>
                        <span onDoubleClick={activateEditMode}>{status || '----'}</span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={statusState}/>
                    </div>
                }
            </div>
        )
    }
;

export default ProfileStatusWithHooks;