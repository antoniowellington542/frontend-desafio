import { FC } from "react";
import { ButtonContainer } from "./styles";

interface IButton{
    color?: string;
    text: string;
    size: 'sm' | 'md' | 'lg';
    onClick?: ()=>void;
    lock?: boolean;
}

export const Button:FC<IButton> = ({color, size, text, onClick, lock}:IButton) => {
    console.log(lock)
    return(
        <ButtonContainer
            onClick={onClick}
            color={lock ? 'disabled' : color} 
            size={size}
            disabled={lock ? true : false}
        >
            {text}
        </ButtonContainer>
    )
}