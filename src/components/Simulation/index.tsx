import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useContext, useEffect, useState } from "react"
import api from "../../services/api"
import { 
    Container, 
    Table,
    TableContainer, 
    TableRow, 
    TableColumnContent, 
    TableColumnTitle,
    Title,
    TitleInfo,
    ContentInfo,
    ContainerInfo,
    InfoItem
} from "./style";
import { SimulationContext } from '../../context/simulation';
import { Button } from "../Button";
import { IParcel } from "../../interfaces/IParcel";

export const DEFAULT_PARCEL = {
    payValue: 0,
    feesValue: 0,
    valueWithFees: 0,
    parcelValue: 0,
    payDate: '00/00/00',
}

export const Simulation = () => {

    const { simulation } = useContext(SimulationContext);
    const [parcels, setParcels] = useState<IParcel[]>([DEFAULT_PARCEL]);
    const [sucess, setSucess] = useState(false);

    useEffect(()=>{
        console.log(simulation);
        setParcels(simulation.parcels);
    },[simulation]);

    const createLoan = async () =>{
        await api.post("/loan/create",{
            simulation
        }, {headers: {'Content-Type': 'application/json'}})
                 .then((response)=>setSucess(true))
                 .catch((err)=>{console.error("error"+err)})
        }

    return(
        <Container>
            {sucess ? <h1>Emprestimo criado</h1> : null}
            <Title>Veja a simulação para o seu empréstimo antes de efetivar</Title>
            <TableContainer>
                <Table>
                    <ContainerInfo>
                        <InfoItem>
                            <TitleInfo>VALOR REQUERIDO:</TitleInfo>
                            <ContentInfo>R$ {simulation?.value ? (simulation?.value).toLocaleString('pt-BR') : 0}</ContentInfo>
                        </InfoItem>
                        <InfoItem>
                            <TitleInfo>TAXA DE JUROS</TitleInfo>
                            <ContentInfo>{simulation?.value ? simulation?.tax*100 : 0}% aos mês</ContentInfo>
                        </InfoItem>
                        <InfoItem>
                            <TitleInfo>VALOR DA PARCELA</TitleInfo>
                            <ContentInfo>R$ {simulation?.parcelValue ? (simulation?.parcelValue).toLocaleString('pt-BR') : 0}</ContentInfo>
                        </InfoItem>
                    </ContainerInfo>
                    <ContainerInfo>
                        <InfoItem>
                            <TitleInfo>TOTAL DE MESES PARA QUITAR</TitleInfo>
                            <ContentInfo>{simulation?.qntParcels  ? simulation?.qntParcels : 0} MESES</ContentInfo>
                        </InfoItem>
                        <InfoItem>
                            <TitleInfo>TOTAL DE JUROS</TitleInfo>
                            <ContentInfo>R$ {simulation?.totalTax  ? (simulation?.totalTax).toLocaleString('pt-BR') : 0}</ContentInfo>
                        </InfoItem>
                        <InfoItem>
                            <TitleInfo>TOTAL A PAGAR</TitleInfo>
                            <ContentInfo>R$ {simulation?.totalPayValue  ? (simulation?.totalPayValue).toLocaleString('pt-BR') : 0}</ContentInfo>
                        </InfoItem>
                    </ContainerInfo>
                    <TableRow>
                        <TableColumnTitle>SALDO DEVEDOR</TableColumnTitle>
                        <TableColumnTitle>JUROS</TableColumnTitle>
                        <TableColumnTitle>SALDO DEVEDOR AJUSTADO</TableColumnTitle>
                        <TableColumnTitle>VALOR DA PARCELA</TableColumnTitle>
                        <TableColumnTitle>VENCIMENTO</TableColumnTitle>
                    </TableRow>
                    {parcels?.map((parcel: IParcel)=>
                        <TableRow key={1}>
                            <TableColumnContent>R$ {(parcel.payValue).toLocaleString('pt-BR')}</TableColumnContent>
                            <TableColumnContent>R$ {(parcel.feesValue).toLocaleString('pt-BR')}</TableColumnContent>
                            <TableColumnContent>R$ {(parcel.valueWithFees).toLocaleString('pt-BR')}</TableColumnContent>
                            <TableColumnContent>R$ {(parcel.parcelValue).toLocaleString('pt-BR')    }</TableColumnContent>
                            <TableColumnContent>{parcel.payDate}</TableColumnContent>
                        </TableRow>
                    )}
                    <TableRow>
                        <TableColumnContent>R$ 0</TableColumnContent>
                    </TableRow>
                </Table>
            </TableContainer>
            <Button color="secondary" size="md" text="Efetivar o empréstimo" onClick={createLoan}/>
        </Container>
    )
}