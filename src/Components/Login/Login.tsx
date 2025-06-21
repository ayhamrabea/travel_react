import { Button } from "../Button/Button";
import { FormField } from "../FormField/FormField";
import { useForm } from "react-hook-form";
import type { LoginSchemaType } from "../../validation/loginSchema";
import { useLoginUserMutation, useLazyGetUserInfoQuery } from "../../services/travel";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/authSlice";
import { Form } from "../Form/Form";

interface LoginProps {
    onToggleStep: () => void;
}

export const Login = ({ onToggleStep }: LoginProps) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loginUser] = useLoginUserMutation();
    const [getUserInfo] = useLazyGetUserInfoQuery();

    const {
        register,
        handleSubmit,
        setError,
        formState: { isSubmitting },
    } = useForm<LoginSchemaType>();

    const onSubmit = async (data: LoginSchemaType) => {
        try {
            const response = await loginUser({ email: data.email, password: data.password }).unwrap();
            localStorage.setItem("token", response.token);

            const userData = await getUserInfo(null).unwrap();
            dispatch(setUser(userData));

            navigate("/profile");
        } catch (error) {
            console.error("Login error:", error);
            setError("email", {
                type: "manual",
                message: "Ошибка. Проверьте email и пароль.",
            });
        }
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)} title="Войти">
            <FormField labelName="Логин">
                <input
                    type="email"
                    autoComplete="email"
                    {...register("email")}
                    placeholder="Логин"
                />
            </FormField>

            <FormField labelName="Пароль">
                <input
                    type="password"
                    placeholder="Пароль"
                    {...register("password")}
                />
            </FormField>

            <div className="form-action">
                <Button className="my-btn my-btn--link" onClick={onToggleStep}>
                    Зарегистрироваться
                </Button>
                <Button className="my-btn" type="submit" disabled={isSubmitting}>
                    Войти
                </Button>
            </div>
        </Form>

    );
};
