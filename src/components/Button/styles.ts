import styled from 'styled-components';

interface IButtonProps{
    color?: string;
    size: 'sm' | 'md' | 'lg';
}


export const ButtonContainer = styled.button<IButtonProps>`
    background-color: ${
        ({color})=> color === 'primary' ? '#F3A126' 
            : color === 'secondary' ? '#21AE1E' 
            : '#D3D3D3'
    };
    width: ${
        ({size}) => size === 'lg' ? '100%' : size === 'md' ? '75%' : '50%'
    };
    padding: 0.8em;
    margin-top: 1em;
    text-align: center;
    border-radius: 6px;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 16px;
    border: none;
    box-shadow: 0px 4px 4px rgba(135, 135, 135, 0.25);
    cursor: pointer;
    transition: all ease-in 0.5s;
    &:active{
        transform: scale(0.95);
        transition: all ease-in 0.5s;
    }
`