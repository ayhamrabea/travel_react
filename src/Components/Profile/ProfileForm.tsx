import { Button } from "../Button/Button"
import { FormField } from "../FormField/FormField"
import type { User } from "../../models/User"
import type { FC } from "react"
import { useForm } from "react-hook-form"
import { Form } from "../Form/Form"
import Icon from "../Icon/Icon"


interface Props {
    user: User | null
    onCancel: () => void
    onSave: (user: User) => void
}

export const ProfileForm:FC<Props> = ({ user, onCancel, onSave}) => {

    const { register, handleSubmit } = useForm<User>({
        defaultValues: {
        full_name: user?.full_name ?? "",
        city: user?.city ?? "",
        bio: user?.bio ?? "",
        photo: user?.photo ?? "",
        },
    })

    const onSubmit = (data: User) => {
        onSave(data)
    }

    return (
        <Form className="form form-wrap" onSubmit={handleSubmit(onSubmit)}>

            <div className="profile-image">
                <img className="profile-image__img" src={user?.photo || '/empty.png'} alt={user?.full_name} />
                <Button className="profile-image__btnChange" type="button">Изменить фото</Button>
            </div>
            
            <div className="profile-content">
                <FormField labelName="ФИО">
                    <input {...register("full_name")} type="text" placeholder="ФИО" />
                </FormField>

                <FormField labelName="Город">
                    <input {...register("city")} type="text" placeholder="Город" />
                </FormField>

                <FormField labelName="О себе">
                    <textarea {...register("bio")} placeholder="О себе" />
                </FormField>
            
                <div className="form-col-2">
                    <FormField labelName="Новый пароль">
                        <input {...register("password")} type="text"  placeholder="Новый пароль"/>
                    </FormField>

                    <FormField labelName="Повторите пароль">
                        <input {...register("password2")} type="text" placeholder="Повторите пароль"/>
                    </FormField>
                </div>


                <div className="form-action">
                    <Button className="my-btn my-btn--link" type="button" onClick={onCancel}>
                        <Icon className="form-back" name="back"></Icon>
                        Назад
                    </Button>

                    <Button className="my-btn" type="submit">
                        Сохранить
                    </Button>
                </div>
            </div>
        </Form>
    )
}