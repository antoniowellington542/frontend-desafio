import { Dispatch, SetStateAction } from "react";
import { IOperationStatus } from "../interfaces/IOperationStatus";
import { ISimulation } from "../interfaces/ISimulation";
import api from "./api";

interface IRequest{
    simulation: ISimulation;
    setOperation: Dispatch<SetStateAction<IOperationStatus>>;
}
export default async function createLoan({simulation, setOperation}:IRequest){
    const { 
        birthday, 
        cpf, 
        parcelValue, 
        value, 
        parcels, 
        qntParcels,
        tax,
        totalPayValue,
        totalTax,
        uf,
    } = simulation;
    await api.post("/loan/create",{
        birthday, 
        cpf, 
        parcelValue, 
        value, 
        parcels, 
        qntParcels,
        tax,
        totalPayValue,
        totalTax,
        uf,
    }, {headers: {'Content-Type': 'application/json'}})
             .then((response)=>{setOperation({
                executed: true,
                success: true,
                message: 'Empréstimo Criado'
             })})
             .catch((err)=>{setOperation({
                executed: true,
                success: false,
                message: err.response.data.message
             })})
}