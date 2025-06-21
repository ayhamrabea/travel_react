import { useEffect } from "react";
import { useForm } from "react-hook-form"
import { useRegisterUserMutation } from "../../services/travel";
import { Button } from "../Button/Button"
import { FormField } from "../FormField/FormField"
import type { RegisterSchemaType } from "../../validation/registerSchema";
import { Form } from "../Form/Form";

interface LoginProps {
    onToggleStep: () => void;
}


export const Register = ({ onToggleStep }: LoginProps) => {

    const [registerUser, { isSuccess }] = useRegisterUserMutation();

    const { register, handleSubmit, watch, setError, formState: {  isSubmitting }, reset } = useForm<RegisterSchemaType>();

    const password = watch("password");

    const onSubmit = async(data: RegisterSchemaType) => {
        if(data.password !== data.password1){
            setError("password1", { type: "manual", message: "Пароли не совпадают" });
            return;
        }

        try {
            await registerUser({email: data.email , password: data.password}).unwrap();
            reset();
        } catch (error) {
            setError("email", { type: "manual", message: "Ошибка регистрации. Проверьте данные." + `${error}` });
        }
    }

    useEffect(() => {
        if(isSuccess){
            onToggleStep();
        }
    },[isSuccess])


    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)} title="Зарегистрироваться">
                <FormField labelName="Логин">
                    <input
                        type="email"
                        placeholder="Логин"
                        {...register("email", {
                            required: "Email обязателен",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Неверный формат email"
                            }
                        })}
                    />
                </FormField>
                
                <div className="form-col-2">
                    <FormField labelName="Пароль">
                        <input
                            type="password"
                            placeholder="Пароль"
                            {...register("password", { required: "Пароль обязателен", minLength: { value: 6, message: "Минимум 6 символов" } })}
                        />
                    </FormField>

                    <FormField labelName="Повторите пароль">
                        <input
                            type="password"
                            placeholder="Повторите пароль"
                            {...register("password1", { required: "Повторите пароль", validate: value => value === password || "Пароли не совпадают" })}
                        />
                    </FormField>
                </div>
                
                <div className="form-action">
                    <Button type="button" className="my-btn my-btn--link" onClick={onToggleStep}>Назад</Button>
                    <Button className="my-btn" type="submit" disabled={isSubmitting}>Зарегистрироваться</Button>
                </div>
            </Form>

        </>
    )
}