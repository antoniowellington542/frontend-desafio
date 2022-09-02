import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useContext, useEffect, useState } from "react"
import api from "../../services/api"
import { 
    Container, 
    Table,
    TableContainer, 
    TableRow, 
    TableColumnContent, 
    TableColumnTitle
} from "./style";
import { SimulationContext } from '../../context/simulation';
import { Button } from "../Button";
import { IParcel } from "../../interfaces/IParcel";

export const DEFAULT_PARCEL = {
    payValue: 0,
    feesValue: 0,
    valueWithFees: 0,
    parcelValue: 0,
    payDate: '',
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
            <h2>Veja a simulação para o seu empréstimo antes de efetivar</h2>
            <TableContainer>
                <Table>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%'}}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                        <p>VALOR REQUERIDO:</p>
                        <p>{simulation?.value ? simulation?.value : 0}</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                        <p>TAXA DE JUROS</p>
                        <p>{simulation?.value ? simulation?.tax : 0}</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                        <p>VALOR DA PARCELA</p>
                        <p>{simulation?.parcelValue ? simulation?.parcelValue : 0}</p>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%'}}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                        <p>TOTAL DE MESES PARA QUITAR</p>
                        <p>{simulation?.qntParcels  ? simulation?.qntParcels : 0}</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                        <p>TOTAL DE JUROS</p>
                        <p>{simulation?.totalTax  ? simulation?.totalTax : 0}</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                        <p>TOTAL A PAGAR</p>
                        <p>{simulation?.totalPayValue  ? simulation?.totalPayValue : 0}</p>
                    </div>
                </div>
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