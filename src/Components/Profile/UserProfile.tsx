import { Button } from "../Button/Button"
import type { User } from "../../models/User"
import type { FC } from "react"
import Icon from "../Icon/Icon"

interface ProfileProps {
    user: User | null
    onEdit: () => void
}



export const UserProfile:FC<ProfileProps> = ({user , onEdit }) => {
    
    const def__user = {
        photo: '/empty.png',
        full_name: 'Имя Пользователь',
        city: 'Город Пользователь',
        bio: 'О Пользователь'
    }
    const finalUser = user ?? def__user;

    return(
        <>
            <div className="profile-image">
                    <img className="profile-image__img" src={finalUser.photo}  alt={finalUser.full_name} />
                    <Button className="profile-image__btnChange" onClick={onEdit}> Изменить фото </Button>
            </div>
            <div className="profile-content">
                <h2 className="profile-content__title">{finalUser.full_name}</h2>
                <div className="profile-content__city">
                    <p className="profile-content__label">Город:</p>
                    <p className="profile-content__value">{finalUser.city }</p>
                </div>
                <div className="profile-content__bio">
                    <p className="profile-content__label">О себе:</p>
                    <p className="profile-content__value">{finalUser.bio }</p>
                </div>
                <div className="profile-content__icon">
                    <Button className="profile-content__icon-btn" onClick={onEdit}>
                        <Icon className="profile-content__icon-edit" name="edit" />
                    </Button>
                </div>
            </div>
        </>
    )
}