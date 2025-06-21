import type { FC, ReactNode } from "react";


interface FormProps {
    children: ReactNode;
    className?: string;
    onSubmit: () => void;
    title?: string
}

export const Form: FC<FormProps> = ({ children, className = 'form', onSubmit , title}) => {
    return (
        <form className={className} onSubmit={onSubmit}>
            <h2 className="form__title">{title}</h2>
            {children}
        </form>
    );
};





