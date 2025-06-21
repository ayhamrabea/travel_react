import type { FC, ChangeEvent } from "react";
import Icon from "../Icon/Icon";

interface InputProps {
    handleClick: () => void;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputFile: FC<InputProps> = ({ handleClick, handleChange }) => {
    return (
        <div className="custom-file">
            <label className="custom-file__label" onClick={handleClick}>
                <Icon name="upload" />
                    Загрузите ваше фото
                <input 
                    type="file" 
                    onChange={handleChange} 
                    className="custom-file__input" 
                    hidden 
                />
            </label>
        </div>
    );
};
