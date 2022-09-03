import styled from 'styled-components';

export const Container = styled.main`
    background-color: #E5E5E5;
    width: 100%;
    position: relative;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 4em;
`

export const Title = styled.h1`
    font-size: 50px;
    font-weight: 300;
    color: #8F99A6;
`

export const Modal = styled.div `
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #00000065;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalError = styled.div`
    background-color: #E85E6C;
    height: 45%;
    width: 100%;
    top: 50%;
    border-top-right-radius: 0.5em;
    border-top-left-radius: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalSuccess = styled.div`
    background-color: green;
    height: 45%;
    width: 100%;
    border-top-right-radius: 0.5em;
    border-top-left-radius: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MessageModal = styled.div`
    border-radius: 0.5em;
    background-color: #FFFFFF;
    width: 40em;
    height: 30em;
    text-align: center;
`