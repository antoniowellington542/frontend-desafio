import { Dispatch, SetStateAction } from "react";
import { IFormData } from "../interfaces/IFormData";
import { ISimulation } from "../interfaces/ISimulation";
import api from "./api";

interface IRequest{
    data:IFormData;
    setClicked: Dispatch<SetStateAction<boolean>>;
    setSimulation:Dispatch<SetStateAction<ISimulation>>;
}

export default async function createSimulation ({data, setClicked, setSimulation}:IRequest)
{
    const { birthday, cpf} = data;
    const uf = (data.uf).toUpperCase();
    const parcelValue = Number(data.parcelValue);
    const value = Number(data.value);
    await api.post('/loan/simulate',{
        birthday,
        uf,
        cpf,
        parcelValue,
        value
    },{headers: {'Content-Type': 'application/json',}})
        .then((response)=> {
            setSimulation(response.data.simulation);
            setClicked(true);
        })
        .catch((err)=>{console.error('error'+err);}); 

};