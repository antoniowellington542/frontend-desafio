import { FC } from "react";
import { ButtonContainer } from "./styles";

interface IButton{
    color?: string;
    text: string;
    size: 'sm' | 'md' | 'lg';
    onClick?: ()=>void;
}

export const Button:FC<IButton> = ({color, size, text, onClick }:IButton) => {
    return(
        <ButtonContainer
            onClick={onClick}
            color={color} 
            size={size}
        >
            {text}
        </ButtonContainer>
    )
}