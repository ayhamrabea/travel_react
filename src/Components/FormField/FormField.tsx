import type { FC, ReactNode } from "react";


interface IFormFieldProps {
    children: ReactNode;
    errorMessage?: string | null;
    labelName: string
}

export const FormField: FC<IFormFieldProps> = ({
    
    children,
    errorMessage,
    labelName
}) => {
    return (
        <div className={`form-field ${errorMessage ? "form-field--error" : ""}`}>
            <span className="form-field__label">{labelName}</span>
            <div className="form-field__input-wrapper">
                {children}
            </div>
            {errorMessage && (
                <span className="form-field__error-text">{errorMessage}</span>
            )}
        </div>
    );
};