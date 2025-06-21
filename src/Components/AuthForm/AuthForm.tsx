import { useState } from "react";
import { Login } from "../Login/Login";
import { Register } from "../Registr/Register";

type AuthStep = "login" | "register" ;

export const AuthForm = () => {
    const [authStep , setAuthStep] = useState<AuthStep>('login')
    
    const toggleAuthStep = () => {
        setAuthStep((prev) => (prev === 'login' ? 'register' : 'login'));
    };


    return (
        <section>
            <div className="container">
                <div className="auth">
                    {/* <h2 className="auth__title">{authStep == 'login' ? 'Войти' : 'Зарегистрироваться'}</h2> */}
                    {authStep === 'login' ? (
                        <Login onToggleStep={toggleAuthStep} />
                    ) : (
                        <Register onToggleStep={toggleAuthStep}/>
                    )}
                </div>
            </div>
        </section>
    )
}