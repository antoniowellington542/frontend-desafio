import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`

export const Title = styled.h2`
    font-weight: 700;
    font-size: 20px;
    color: #000000;
`

export const FormContainer = styled.div`
    background-color: #FFFFFF;
    max-width: 75%;
    width: 75%;
    padding: 3.5em 3em 2em 3em;
    border-radius: 5px;
`

export const InputForm = styled.input`
    width: 96%;
    padding: 1.2em;
    border: 1px solid #D4D4D4;
    border-radius: 6px;
    margin-top: 1em;
    margin-bottom: 0.5em;
    font-size: 18px;
    &::placeholder{
        padding-left: 0.5em;
        font-weight: 400;
        font-size: 18px;
        color: #737373;
        display: flex;
        align-items: center;
    }
`

export const MessageError = styled.span`
    color: red;
    font-size: 1em;
`