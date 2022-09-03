import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 2em;
    width: 100%;
` 

export const Title = styled.h2`
    font-weight: 700;
    font-size: 20px;
    color: #000000;
`

export const TableContainer = styled.div`
    background-color: #FFFFFF;
    max-width: 75%;
    width: 75%;
    padding: 0.5em 3em 2em 3em;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 799px){
        width: 100%;
        max-width: 100%;
        padding: 0.5em 1em 1em 1em;
    }
`

export const ContainerInfo = styled.div`
    display: grid;
    grid-template-columns: 30% 30% 20%;
    justify-content: space-between;
    width: 80%;
    margin-bottom: 2em;

    @media screen and (max-width: 799px){
        grid-template-columns: 50% 50%;
        width: 100%;
        justify-content: space-between;
        align-items: center ;
    }
`;

export const InfoItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const TitleInfo = styled.p`
    font-weight: 700;
    font-size: 14px;
    color: #737373;
`

export const ContentInfo = styled.p`
    font-weight: 700;
    font-size: 20px;
    color: #333333;
`

export const Table = styled.table`
    padding: 0.5em;
    width: 100%;
`;

export const TableRow = styled.tr`
    display: grid;
    grid-template-columns: 20% 13% 25% 20% 20%;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1em;
    border-bottom: 1px solid #C4C4C4;

    @media screen and (max-width: 799px){
        grid-template-columns: auto auto;
    }
`


export const TableColumnTitle = styled.td`
    color: #333333;
    font-weight: 700;
    font-size: 16px;
    margin-right: 0.8em;
    padding-bottom: 0.8em;
`

export const TableColumnContent = styled.td`
    color: #333333;
    font-weight: 400;
    font-size: 16px;
    margin-right: 0.8em;
    padding-bottom: 0.5em;
    text-align: start;
`