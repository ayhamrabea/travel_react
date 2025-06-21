import { useState } from "react"
import type { FC } from "react"
import type { User } from "../../models/User"
import { UserProfile } from "./UserProfile"
import { ProfileForm } from "./ProfileForm"

interface Props {
    user: User | null
}

export const Profile: FC<Props> = ({ user }) => {
    const [isEditMode, setIsEditMode] = useState(false)

    const handleEditClick = () => setIsEditMode(true)
    const handleCancelEdit = () => setIsEditMode(false)

    const handleSave = (updatedUser: User) => {
        // TODO: send updated user to API or Redux store
        console.log("Saved user:", updatedUser)
        setIsEditMode(false)
    }

    return (
        <>
        <div className="container">
                <div className="profile">
                    {isEditMode ? (
                        <ProfileForm user={user} onCancel={handleCancelEdit} onSave={handleSave} />
                    ) : (
                        <UserProfile user={user} onEdit={handleEditClick} />
                    )}
                </div>
        </div>
        </>
    )
}
